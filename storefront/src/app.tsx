import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Catalog from "./pages/catalog"
import Product from "./pages/product"
import Cart from "./pages/cart"
import Checkout from "./pages/checkout"
import OrderStatus from "./pages/OrderStatus"
import AskSupport from "./components/AskSupport"
import Layout from "./components/Layout"

export default function App() {
  const location = useLocation()

  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Catalog />
                </motion.div>
              }
            />
            <Route
              path="/p/:id"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Product />
                </motion.div>
              }
            />
            <Route
              path="/cart"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Cart />
                </motion.div>
              }
            />
            <Route
              path="/checkout"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Checkout />
                </motion.div>
              }
            />
            <Route
              path="/order/:id"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <OrderStatus />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </Layout>

      <AskSupport />
    </>
  )
}
