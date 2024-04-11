import file from '@assets/svg/attach.svg'
import envelope from '@assets/svg/envelope.svg'
import message from '@assets/svg/message.svg'
import copy from '@assets/svg/copy.svg'

const SideIcons = () => {
  return (
    <div className="flex flex-col fixed left-0 top-[260px] rounded-[100px] p-[4px] shadow-sm shadow-[#5C7383]">
      <img src={file} alt="file icon" />
      <img src={envelope} alt="envelope icon" />
      <img src={message} alt="message icon" />
      <img src={copy} alt="copy icon" />
    </div>
  );
}

export default SideIcons