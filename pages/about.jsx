/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../styles/About.module.css";
import HelmetMetaData from "../components/HelmetMetaData";

import { BsFolderFill, BsMarkdownFill } from "react-icons/bs";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  const [showLanguage, setShowLanguage] = useState(true);
  const [showFramework, setShowFramework] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showTool, setShowTool] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className={style.about}>
      <HelmetMetaData />
      <div className={style.skill_menu} onClick={(e) => setShowMenu(!showMenu)}>
        {" "}
        {showMenu ? <AiOutlineClose /> : <HiOutlineMenu />}
      </div>

      <div className={style.left}>
        <motion.div
          className={style.left_number}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "100px",
              opacity: 0,
            },
            visible: {
              y: "-370px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 2,
              },
            },
          }}
        >
          <span className={style.text_fade_01}>20</span>
          <span className={style.text_fade_01}>21</span>
          <span className={style.text_fade_01}>22</span>
          <span className={style.text_fade_01}>23</span>
          <span className={style.text_fade_01}>24</span>
          <span className={style.text_fade_01}>25</span>
          <span className={style.text_fade_01}>26</span>
          <span className={style.text_fade_01}>27</span>
          <span className={style.text_fade_01}>28</span>
          <span className={style.text_fade_01}>29</span>
          <span className={style.text_fade_01}>30</span>
          <span className={style.text_fade_01}>31</span>
          <span className={style.text_fade_01}>32</span>
          <span className={style.text_fade_01}>33</span>
          <span className={style.text_fade_01}>34</span>
          <span className={style.text_fade_01}>35</span>
          <span className={style.text_fade_02}>36</span>
          <span className={style.text_fade_03}>37</span>
          <span>38</span>
          <span>39</span>
          <span>40</span>
          <span>41</span>
          <span>42</span>
          <span>43</span>
          <span>44</span>
          <span>45</span>
          <span>46</span>
          <span>47</span>
          <span>48</span>
          <span>49</span>
          <span>50</span>
          <span>51</span>
          <span>52</span>
          <span className={style.text_fade_03}>53</span>
          <span className={style.text_fade_02}>54</span>
          <span className={style.text_fade_01}>55</span>
        </motion.div>
        <div className={style.left_line}></div>
        <div className={style.left_line2}></div>
        <motion.div
          className={style.left_about}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "300px",
              opacity: 0,
            },
            visible: {
              y: "0px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 3,
              },
            },
          }}
        >
          <span className={style.ml_2}> /**</span>
          <span style={{ fontWeight: "bold" }}>* about me</span>
          <span>* a rising junior studying computer science </span>
          <span>* enjoy designing and creating responsive websites </span>
          <span>* currently learning: react.js & next.js </span>
          <span>* passionate in learning new technologies! </span>

          <span className={style.ml_2}>*/</span>
        </motion.div>
      </div>
      {showMenu && (
        <motion.div
          className={style.right}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              x: "100px",
              opacity: 0,
            },
            visible: {
              x: "0",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 2,
              },
            },
          }}
        >
          <div className={style.right_container}>
            <h3>MY INTERESTS</h3>
            <div className={style.right_interest}>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowLanguage(!showLanguage)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showLanguage ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span
                    style={{ color: "rgb(235,203,139)", marginRight: "3px" }}
                  >
                    <BsFolderFill />
                  </span>
                  <span> languages </span>
                </div>
                <AnimatePresence>
                  {showLanguage && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> html.md
                      </p>
                      <p>
                        <BsMarkdownFill /> css.md
                      </p>
                      <p>
                        <BsMarkdownFill /> javascript.md
                      </p>
                      <p>
                        <BsMarkdownFill /> python.md
                      </p>
                      <p>
                        <BsMarkdownFill /> java.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowFramework(!showFramework)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showFramework ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span
                    style={{ color: "rgb(136,192,208)", marginRight: "3px" }}
                  >
                    <BsFolderFill />
                  </span>
                  <span> frameworks </span>
                </div>
                <AnimatePresence>
                  {showFramework && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> react.js.md
                      </p>
                      <p>
                        <BsMarkdownFill /> react native.md
                      </p>
                      <p>
                        <BsMarkdownFill /> node.js.md
                      </p>
                      <p>
                        <BsMarkdownFill /> django.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowTool(!showTool)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showTool ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span
                    style={{ color: "rgb(191,97,106)", marginRight: "3px" }}
                  >
                    <BsFolderFill />
                  </span>
                  <span> libraries </span>
                </div>
                <AnimatePresence>
                  {showTool && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> material ui.md
                      </p>
                      <p>
                        <BsMarkdownFill /> bootstrap.md
                      </p>
                      <p>
                        <BsMarkdownFill /> tailwind css.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowLibrary(!showLibrary)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showLibrary ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span
                    style={{ color: "rgb(163,190,140)", marginRight: "3px" }}
                  >
                    <BsFolderFill />
                  </span>
                  <span> tools </span>
                </div>
                <AnimatePresence>
                  {showLibrary && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> linux.md
                      </p>
                      <p>
                        <BsMarkdownFill /> git.md
                      </p>
                      <p>
                        <BsMarkdownFill /> github.md
                      </p>
                      <p>
                        <BsMarkdownFill /> figma.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => setShowFree(!showFree)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showFree ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "whitesmoke", marginRight: "3px" }}>
                    <BsFolderFill />
                  </span>
                  <span> free time </span>
                </div>
                <AnimatePresence>
                  {showFree && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> building side projects.md
                      </p>
                      <p>
                        <BsMarkdownFill /> watching netflix.md
                      </p>
                      <p>
                        <BsMarkdownFill /> listening to indie rock.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
