import classes from "./Shortens.module.scss";
import { Button } from "../Button";
import LinkStore from "../../store/linkStore";
import { observer } from "mobx-react";
import { AnimatePresence, motion } from "framer-motion";

const Shortens = observer(() => {
  const links = LinkStore.items;

  if (!links?.length) return null;

  return (
    <section className={classes.Shortens}>
      <div className="container">
        {links.map((item) => (
          <AnimatePresence key={item.code}>
            <motion.div
              className={classes.item}
              initial={{ opacity: 0, translateX: "-100%" }}
              animate={{ opacity: 1, translateX: 0 }}
            >
              <span>{item.original_link}</span>
              <span>{item.full_short_link2}</span>
              <Button variant="square">Copy</Button>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
});

export { Shortens };
