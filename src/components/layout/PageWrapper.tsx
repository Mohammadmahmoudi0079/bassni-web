"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const PageWrapper = ({ children }: Props) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;