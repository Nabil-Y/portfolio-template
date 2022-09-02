import Image from "next/image";

const ProfileIcon = () => {
  return (
    <div className=" h-12 w-12 overflow-hidden rounded-full">
      <Image
        src="/static/icon.jpg"
        alt=""
        layout="responsive"
        width={1}
        height={1}
        aria-hidden="true"
      />
    </div>
  );
};

export default ProfileIcon;
