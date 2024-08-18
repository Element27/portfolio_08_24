import React from "react";
import { MdiGithub, MdiLinkedin, MingcuteTelegramLine } from "./icons";

export function SendIcon() {
  return (
    <div className="send-icon-bg rounded-full p-2 relative overflow-hidden">
      <div className="send-icon-bg animate-spin absolute w-full h-full  top-0 left-0 " />
      <div className="bg-black/30 absolute w-full h-full  top-0 left-0 z-10" />
      <MingcuteTelegramLine className="text-white text-4xl relative z-20 " />
    </div>
  );
}

export function GithubIcon() {
  return (
    <div className="send-icon-bg rounded-full p-3 relative overflow-hidden">
      {/* <div className="send-icon-bg absolute w-full h-full  top-0 left-0 " /> */}
      <div className="bg-black/30 absolute w-full h-full  top-0 left-0 z-10" />
      <MdiGithub className="text-white text-5xl relative z-20 " />
    </div>
  );
}

export function LinkedInIcon() {
  return (
    <div className="send-icon-bg rounded-full p-3 relative overflow-hidden">
      {/* <div className="send-icon-bg absolute w-full h-full  top-0 left-0 " /> */}
      <div className="bg-black/30 absolute w-full h-full  top-0 left-0 z-10" />
      <MdiLinkedin className="text-white text-5xl relative z-20 " />
    </div>
  );
}
