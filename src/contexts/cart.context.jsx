import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd, selectedSize) => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === productToAdd.id && cartItem.size === selectedSize
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id && cartItem.size === selectedSize
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  const selectedPrice = productToAdd.price[selectedSize]
  const selectedThumbnail = productToAdd.thumbnailUrl.thumb1

  return [
    ...cartItems,
    {
      ...productToAdd,
      quantity: 1,
      thumbnailUrl: selectedThumbnail,
      size: selectedSize,
      price: selectedPrice,
    },
  ]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === cartItemToRemove.id &&
      cartItem.size === cartItemToRemove.size
  )


  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.size !== cartItemToRemove.size
    )
  }


  return cartItems.map((cartItem) =>
    cartItem.size === cartItemToRemove.size
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter(
    (cartItem) =>
      cartItem.id !== cartItemToClear.id ||
      cartItem.size !== cartItemToClear.size
  );

export const CartContext = createContext({
  isCartOpen: false,
  selectSize: () => {},
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearAllItemsFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd, selectedSize) => {
    setCartItems(addCartItem(cartItems, productToAdd, selectedSize))
  }

  //remove one item from cart
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  // remove all cart items
  const clearAllItemsFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearAllItemsFromCart,
    cartItems,
    cartCount,
    cartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
