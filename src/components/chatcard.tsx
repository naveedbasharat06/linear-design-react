import React, { useState } from "react";
import { motion } from "framer-motion";
import "./chatCard.css";
import rightrectangle from "../images/rightRectangle.png";
import topRightrectangle from "../images/NoiseTexture.png";
import topfullRectangle from "../images/fullwidthTopRectangle.png";
import bottomfullRectangle from "../images/bottomfullwidthrectangle.png";
import conversation_btn from "../images/EllipseBtn585.png";



interface ChatItemProps {
  name: string;
  username: string;
  lastMessage: string;
  firstSeen: string;
  avatar: string;
  online?: boolean;
  scale: number;
}

const ChatItem: React.FC<ChatItemProps> = ({
  name,
  username,
  lastMessage,
  firstSeen,
  avatar,
  online,
  scale,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: scale - 0.1 }}
      animate={{ opacity: 1, y: 0, scale }}
      transition={{ duration: 0.1 }}
      whileHover={{ scale: scale + 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="chatcard_items relative flex items-center justify-between
                 bg-gradient-to-tr from-neutral-900 to-neutral-800 rounded-[20px] p-3 lg:px-5 lg:pl-5 pr-4 backdrop-blur-md 
                 cursor-pointer transition-all duration-300 
                 overflow-hidden  group w-full border border-slate-600"
    >
      {/* <div className="absolute inset-0 rounded-2xl shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-shadow duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-2xl"></div> */}

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"
        animate={{
          x: isHovered ? ["100%", "-100%"] : "100%",
        }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: isHovered ? Infinity : 0,
        }}
      />

      <div className="flex items-center gap-3 relative z-10 ">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-[45px] h-[45px] rounded-full object-cover border border-gray-700"
          />
          {online && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-[#669900] rounded-full border border-neutral-200"></span>
          )}
        </div>
        <div>
          <p className="text-white font-medium text-ms md:lg opacity-85">
            {name}
          </p>
          <p className="text-sm text-neutral-400 font-medium">{username}</p>
        </div>
      </div>
      <div className="text-left flex flex-col justify-between gap-2">
        <p className="text-sm md:text-[15.34px] leading-[100%] tracking-normal font-medium text-white opacity-80">
          {lastMessage}
        </p>
        <p className="text-xs md:text-[15.34px] leading-[100%] tracking-normal font-medium text-neutral-400">
          {firstSeen}
        </p>
      </div>
      <button className="relative z-10 text-white hover:text-purple-400 transition-colors pr-2">
        ⋮
      </button>
    </motion.div>
  );
};

const ChatCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="linear_gradient_main_card flex items-center justify-center rounded-3xl">
      <motion.div
        className="background_gradient_card border-2 border-[#FFFFFF1A] bg-gradient-to-tr from-neutral-900 to-neutral-800  rounded-3xl md:min-h-[280px] p-6 lg:px-4 lg:py-5 max-w-[100%] md:w-[100%] lg:w-[931px] mx-auto flex flex-col md:flex-row gap-[80px] relative overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <img
          id="topfullWidth_rectange_bg"
          src={bottomfullRectangle}
          alt="right rectangle"
        />
        <img
          id="bottomfullWidth_rectange_bg"
          src={topfullRectangle}
          alt="right rectangle"
        />
        <img
          id="topright_rectange_bg"
          src={topRightrectangle}
          alt="right rectangle"
        />
        {/* <div className="absolute inset-0 rounded-3xl "></div> */}

        <div className="flex flex-col justify-end relative z-[101]">
          <div className="max-h-[87px] w-full max-w-[276px]">
            <h1 className="text-lg md:text-xl lg:text-2xl font-medium leading-[120%] tracking-normal space-y-1">
              <h3 className="text-white opacity-80">Test Tests Tests Test</h3>
              <h3 className="text-[#adadad] opacity-70">
                Test Tests, Test Tests. 
              </h3>
              <h3 className="text-white opacity-80">Tests Tests Tests.</h3>
            </h1>
          </div>

          <div className="group">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative text-lg mt-6 md:mt-12 px-6 py-1 md:min-w-[219px] md:h-[42px] 
                 rounded-full text-white font-medium overflow-hidden
                 group-hover:bg-gradient-to-r from-black-700 to-white-700
                  bg-gradient-to-r from-black via-gray-800 to-black 
                   transition-all duration-500 border border-white/30
                   z-[200px] lg:mt-[70px]
                 "
            >
              {/* <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              /> */}
                <img
          id="conversation_btn"
          src={conversation_btn}
          alt="conversation button"
        />
              <span className="relative z-10 flex items-center justify-center opacity-80">
                Start a Conversation
              </span>
            </motion.button>
          </div>
        </div>

        <div className="flex-1 flex flex-col space-y-2 relative max-w-[600px] mr-3">
          <span className="translate-y-[22px] z-30 opacity-100">
            <ChatItem
              name="Test"
              username="@sarahchen5556"
              lastMessage="Last messgage 1 week ago"
              firstSeen="First seen 1 weeks ago"
              avatar="https://randomuser.me/api/portraits/women/75.jpg"
              online
              scale={1.05}
            />
          </span>
          <span className="translate-y-[-9px] z-20 opacity-80">
            <ChatItem
              name="Martin G"
              username="@martin234234"
              lastMessage="Last messgage 2 week ago"
              firstSeen="First seen 2 weeks ago"
              avatar="https://randomuser.me/api/portraits/men/32.jpg"
              online
              scale={1.0}
            />
          </span>
          <span className="translate-y-[-40px] z-10 opacity-70">
            <ChatItem
              name="Rylee Ree"
              username="@rygreee"
              lastMessage="Last messgage 2 week ago"
              firstSeen="First seen 3 weeks ago"
              avatar="https://randomuser.me/api/portraits/women/44.jpg"
              online
              scale={0.95}
            />
          </span>
        </div>

        <img
          id="right_rectange_bg"
          src={rightrectangle}
          alt="right rectangle"
        />
      </motion.div>
    </div>
  );
};

export default ChatCard;
