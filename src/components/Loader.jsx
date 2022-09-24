import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = ({ visible }) => {
  return (
    <MagnifyingGlass
      visible={visible}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};
