import Image from "next/image";

import attio from "../../public/assets/attio.png";
import recessed_segment_control from "../../public/assets/recessed-segment-control.png";
import banking_app from "../../public/assets/banking-app.png";
import register from "../../public/assets/register.png";
import nav_menu from "../../public/assets/nav-menu.png";
import circular_tactile_button from "../../public/assets/circular-tactile-button.png";
import tactile_button from "../../public/assets/tactile-button.png";
import collapsible_sidebar_1 from "../../public/assets/collapsible-sidebar-1.png";
import connect_modal from "../../public/assets/connect-modal.png";
import payment_modal from "../../public/assets/payment-modal.png";
import email_confirm from "../../public/assets/email-confirm.png";
import minimalistic_music_player from "../../public/assets/minimalistic-music-player.png";

const images = [
  attio,
  minimalistic_music_player,
  banking_app,
  register,
  recessed_segment_control,
  nav_menu,
  circular_tactile_button,
  tactile_button,
  collapsible_sidebar_1,
  connect_modal,
  payment_modal,
  email_confirm,
];

export const Work = () => {
  return (
    <div className="max-w-screen overflow-hidden">
      <div className="p-4 px-6 max-w-[calc(100vw+16px)] mx-[-8px] overflow-scroll no-scrollbar">
        <div className="flex gap-4">
          {images.map((image, index) => {
            return (
              <Image
                className="rounded-xl shadow-md w-1/2 md:w-1/3"
                key={index}
                alt=""
                src={image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
