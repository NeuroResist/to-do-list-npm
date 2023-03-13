import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { IMyProfile } from "./interface";

function MyProfile({ setIsModalOpen, isModalOpen, iconPath, name, email }: IMyProfile) {
  return (
    <figure className="flex mb-2 relative">
      <img className="rounded-full" src={iconPath} alt="account" />

      <div className="p-2">
        <figcaption className="font-bold">{name}</figcaption>

        <HelpOutlineIcon
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="absolute top-0 right-0 cursor-pointer"
          fontSize="large"
        />

        <address className="text-sm text-[#0F0]">
          <a href="mailto:pataponchik3@gmail.com">{email}</a>
        </address>
      </div>
    </figure>
  );
}

export default MyProfile;
