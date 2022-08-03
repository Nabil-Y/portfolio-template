import Image from "next/image";

const ProfileIcon = () => {
  return (
    <div className=" h-12 w-12 overflow-hidden rounded-full">
      <Image
        src="/static/nabil.png"
        alt="Nabil Yassine Illustration"
        width={48}
        height={48}
      />
    </div>
  );
};

export default ProfileIcon;