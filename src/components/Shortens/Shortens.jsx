import classes from "./Shortens.module.scss";
import { Button } from "../Button";
import LinkStore from "../../store/linkStore";
import { observer } from "mobx-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Shortens = observer(() => {
  const [copiedLinks, setCopiedLinks] = useState(null);

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLinks(link);
    });
  };

  const links = LinkStore.items;
  if (!links?.length) return null;

  return (
    <section className={classes.Shortens}>
      <div className="container">
        {links.map((item) => (
          <AnimatePresence key={item.code}>
            <motion.div
              className={classes.item}
              data-active={copiedLinks === item.full_short_link2}
              initial={{ opacity: 0, translateX: "-100%" }}
              animate={{ opacity: 1, translateX: 0 }}
            >
              <span>{item.original_link}</span>
              <span>{item.full_short_link2}</span>
              <Button
                variant="square"
                onClick={() => copyToClipboard(item.full_short_link2)}
              >
                {copiedLinks === item.full_short_link2
                  ? "Скопировано"
                  : "Скопировать"}
              </Button>
            </motion.div>
          </AnimatePresence>
        ))}
        {LinkStore.status ? (
          <motion.div
            className={classes.item}
            initial={{ opacity: 0, translateX: "-100%" }}
            animate={{ opacity: 1, translateX: 0 }}
          >
            <span>{LinkStore.status}</span>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
});

export { Shortens };
