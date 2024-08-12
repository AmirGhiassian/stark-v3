// import { motion, Transition } from "framer-motion";

// const loadingContainer = {
//   width: "4rem",
//   height: "4rem",
//   display: "flex",
//   justifyContent: "space-around",
// };
//
// const container = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh", // Full height of the viewport
//   width: "100vw", // Full width of the viewport
//   padding: "1rem",
//   border: "0.5rem",
// };
//
// const loadingCircle = {
//   display: "block",
//   width: "1rem",
//   height: "1rem",
//   backgroundColor: "black",
//   borderRadius: "1rem",
// };
//
// const loadingCircleTransition: Transition = {
//   duration: 0.4,
//   repeat: Infinity,
//   repeatType: "reverse",
//   ease: "easeInOut",
// };
//
// const loadingContainerVarients = {
//   start: { transition: { staggerChildren: 0.1 } },
//   end: { transition: { staggerChildren: 0.1 } },
// };
//
// const loadingCircleVarients = {
//   start: {
//     y: "0%",
//   },
//   end: {
//     y: "100%",
//   },
// };

const container = {
  textDecoration: "bold",
  fontSize: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // Full height of the viewport
  width: "100vw", // Full width of the viewport
  padding: "1rem",
  border: "0.5rem",
};

function Loading() {
  return (
    <div style={container}>
      <h1>Loading...</h1>
      {/* <motion.div */}
      {/*   style={loadingContainer} */}
      {/*   variants={loadingContainerVarients} */}
      {/*   initial="start" */}
      {/*   animate="end" */}
      {/* > */}
      {/*   <motion.span */}
      {/*     style={loadingCircle} */}
      {/*     variants={loadingCircleVarients} */}
      {/*     transition={loadingCircleTransition} */}
      {/*   /> */}
      {/*   <motion.span */}
      {/*     style={loadingCircle} */}
      {/*     variants={loadingCircleVarients} */}
      {/*     transition={loadingCircleTransition} */}
      {/*   /> */}
      {/*   <motion.span */}
      {/*     style={loadingCircle} */}
      {/*     variants={loadingCircleVarients} */}
      {/*     transition={loadingCircleTransition} */}
      {/*   /> */}
      {/* </motion.div> */}
    </div>
  );
}

export default Loading;
