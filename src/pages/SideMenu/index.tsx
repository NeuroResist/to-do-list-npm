import { Outlet } from "react-router";

import ModalHelpSections from "./ModalHelpSections/ModalHelpSections";
import MyProfile from "./MyProfile";
import SidebarMenu from "./Menu";

import useControl from "./useControl";

import { MY_PROFILE } from "MOCK";

function SideMenu() {
  const { isModalOpen, setIsModalOpen, filterTasks, refModal } = useControl();

  return (
    <div className="flex min-h-screen">
      <div className="min-w-[300px] bg-light-blue shrink-0 p-3">
        <MyProfile
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          iconPath={MY_PROFILE[0].iconPath}
          name={MY_PROFILE[0].name}
          email={MY_PROFILE[0].email}
        />

        {isModalOpen && (
          <ModalHelpSections
            refModal={refModal}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}

        <SidebarMenu />
      </div>

      <div className="w-full bg-background p-5 relative">
        <Outlet
          context={{
            filterTasks,
          }}
        />
      </div>
    </div>
  );
}

export default SideMenu;
