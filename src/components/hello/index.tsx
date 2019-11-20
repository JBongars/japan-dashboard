import React from 'react';

interface helloProps {
  name: string;
}

const Hello: React.SFC<helloProps> = ({ name }) => (<div>Hello there, {name}!</div>);

export { Hello };
export default Hello
