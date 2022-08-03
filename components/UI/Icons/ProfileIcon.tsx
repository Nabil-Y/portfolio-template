import Image from "next/image";

const ProfileIcon = () => {
  return (
    <div className=" h-16 w-16 overflow-hidden rounded-full">
      <Image
        src="/static/nabil.png"
        alt="Nabil Yassine Illustration"
        width={64}
        height={64}
      />
    </div>
  );
};

export default ProfileIcon;
