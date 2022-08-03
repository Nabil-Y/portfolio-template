import Image from "next/image";

const ProfileIcon = () => {
  return (
    <div className=" h-12 w-12 overflow-hidden rounded-full">
      <Image
        src="/static/nabil.png"
        alt="Nabil Yassine Illustration"
        layout="responsive"
        width={1}
        height={1}
      />
    </div>
  );
};

export default ProfileIcon;
