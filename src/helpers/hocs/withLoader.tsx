import React from "react";
import Loader from "../../components/Loader";

interface Props {
  isLoading: boolean;
}

function withLoader<P extends object>(Component: React.ComponentType<P>) {
  return function WithLoader(props: Props & P) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Loader />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withLoader;
