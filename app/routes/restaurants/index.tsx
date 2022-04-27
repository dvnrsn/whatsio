import { LinksFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import Input from "~/components/input";
import useGoogleApi from "~/hooks/useGoogleApi";
import restaurantStyles from "~/styles/restaurants.css";
import { motion } from "framer-motion";
import Button from "~/components/button";
import Loader from "~/components/loader";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: restaurantStyles }];
};

export default function () {
  const imageUrl = useGoogleApi();
  const [loadingImage, setLoadingImage] = useState(false);
  useEffect(() => {
    if (imageUrl) {
      setLoadingImage(true);
    }
  }, [imageUrl]);

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: "-100%" },
  };

  const buttonVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "10px" },
  };

  const hide = !imageUrl || loadingImage;

  return (
    <div className="centered-content-container">
      Which Restauraunt?
      <Input id="google-auto-complete" autoFocus type="text" />
      <div className="image-and-button-container">
        {imageUrl && loadingImage && (
          <div className="centered-loader">
            <Loader />
          </div>
        )}
        {imageUrl && (
          <motion.img
            variants={variants}
            initial="hidden"
            animate={!hide ? "visible" : "hidden"}
            onLoad={() => setLoadingImage(false)}
            className="restaurant-image"
            src={imageUrl}
            style={{
              visibility: hide ? "hidden" : "visible",
            }}
          />
        )}
        {!hide && (
          <div className="thats-it-button">
            <motion.div
              initial="hidden"
              variants={buttonVariants}
              transition={{ delay: 0.3 }}
              animate={!hide ? "visible" : "hidden"}
            >
              <Button href={`/restaurants/`}>Yes, let's go</Button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
