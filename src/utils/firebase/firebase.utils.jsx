import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,

} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCEV3SYmAtvFUFwHrUhscUt6KvB4Q9ATLw',
  authDomain: 'plant-haus-db-b9419.firebaseapp.com',
  projectId: 'plant-haus-db-b9419',
  storageBucket: 'plant-haus-db-b9419.appspot.com',
  messagingSenderId: '868663880490',
  appId: '1:868663880490:web:529bf5a3744f9ddcfe8c53',
}

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  // you can add fields here like field = 'whatever' then you go to object.[field].toLowerCase()
  field = 'title'
) => {
  // creating a collection reference by calling the firevase collection method passing in our database and then our collectionKey (which we made) which is referencing our database
  const collectionRef = collection(db, collectionKey)
  // create a batch variable and assign it to the evaluated result of the writeBatch method from firebase passing in our databse that allows us to create our database in our application
  const batch = writeBatch(db)

  // use the obejctsToAdd argument to loop through the object and on each object....
  objectsToAdd.forEach((object) => {
    // create a document reference and assign it the evaluated result of calling the firebase doc method passing in our collection ref (which is our main database) as the key and object (our db subcategories and documents) as the value and making them lowercase to match our db
    const docRef = doc(collectionRef, object[field].toLowerCase())
    //utilizing the set method on the firebase writeBatch method previously created on 55 and passing in our docRef above as well as our object containing all collections, subcollections and documents.
    batch.set(docRef, object)
  })
  //use the commit method on batch to push it into firestore.
  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  // we need our collectionRef passing in our db and the collectionKey (categories)
  const collectionRef = collection(db, 'categories')
  // generate a query off the collectionRef by using the query method on collectionRef or accessing our collection
  const q = query(collectionRef)
  // that gives use an object that we can get snapshot off of by using getDocs method that fetches the snapshots
  const querySnapshot = await getDocs(q)
  // the querysnapshot.doc allows use to access the different document snapshots off of querysnapshots.doc which gives us an array of all the individual documents inside the snapshots are the actual data. We reduce over this to give us our structrue of the collection.
  //reduce over the array to end up with the final object we want to create
  const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    // destructure the data (object) and take off the title and items from the docsnapshot
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items

    return acc
  }, {})
  return categoriesMap
}

// Get reviews and documents

export const getReviewsAndDocuments = async () => {
  // we need our collectionRef passing in our db and the collectionKey (categories)
  const collectionRef = collection(db, 'reviews')
  // generate a query off the collectionRef by using the query method on collectionRef or accessing our collection
  const q = query(collectionRef)
  // that gives use an object that we can get snapshot off of by using getDocs method that fetches the snapshots
  const querySnapshot = await getDocs(q)
  // the querysnapshot.doc allows use to access the different document snapshots off of querysnapshots.doc which gives us an array of all the individual documents inside the snapshots are the actual data. We reduce over this to give us our structrue of the collection.
  //reduce over the array to end up with the final object we want to create
  const reviewsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    // destructure the data (object) and take off the title and items from the docsnapshot
    const { title, people } = docSnapshot.data()
    acc[title.toLowerCase()] = people

    return acc
  }, {})
  return reviewsMap
}
// export const getAllProductsAndDocuments = async () => {
//   // we need our collectionRef passing in our db and the collectionKey (categories)
//   const collectionRef = collection(db, 'all-products')
//   // generate a query off the collectionRef by using the query method on collectionRef or accessing our collection
//   const q = query(collectionRef)
//   // that gives use an object that we can get snapshot off of by using getDocs method that fetches the snapshots
//   const querySnapshot = await getDocs(q)
//   // the querysnapshot.doc allows use to access the different document snapshots off of querysnapshots.doc which gives us an array of all the individual documents inside the snapshots are the actual data. We reduce over this to give us our structrue of the collection.
//   //reduce over the array to end up with the final object we want to create
//   const allProductsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//     // destructure the data (object) and take off the title and items from the docsnapshot
//     const { title, items } = docSnapshot.data()
//     acc[title.toLowerCase()] = items

//     return acc
//   }, {})
//   return allProductsMap
// }

//collectionGroup("charecters")
// .where("book", "==" "Olivers Twist")

// export const getPlantPageAndDocuments = async () => {
//   // we need our collectionRef passing in our db and the collectionKey (categories)
//   const collectionRef = collection(db, '')
//   // generate a query off the collectionRef by using the query method on collectionRef or accessing our collection
//   const q = query(collectionRef)
//   // that gives use an object that we can get snapshot off of by using getDocs method that fetches the snapshots
//   const querySnapshot = await getDocs(q)
//   // the querysnapshot.doc allows use to access the different document snapshots off of querysnapshots.doc which gives us an array of all the individual documents inside the snapshots are the actual data. We reduce over this to give us our structrue of the collection.
//   //reduce over the array to end up with the final object we want to create
//   const plantPageMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//     // destructure the data (object) and take off the title and items from the docsnapshot
//     const { title, items } = docSnapshot.data()
//     acc[title.toLowerCase()] = items

//     return acc
//   }, {})
//   return plantPageMap
// }

// This data model for how to fetch data from firebase changes a lot! Which is why we keep this in the utils file so we can isolate when breakages happen
/*
Referece of object structure we are creating

{
  new_arrivals: {
    title: 'New Arrivals',
    items: [
      {},
      {},
    ]
  },
  pet_friendly: {
    title: 'Pet Friendly',
    items: [
      {},
      {},
    ]
  },
}



*/

// export const getCategoryAndDocuments = async () => {
//   const querySnapshot = await getDocs(collection(db, 'categories'))

//   const categoryMap = querySnapshot.docs.reduce(function (acc, doc) {
//     const { title, items } = doc.data()
//     acc[title.toLowerCase()] = items
//     return acc
//   }, {})

//   console.log('category map', categoryMap)
//   return categoryMap
// }

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
