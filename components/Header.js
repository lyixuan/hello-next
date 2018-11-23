import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href='/'>
      <a style={linkStyle}>Home1</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>About2</a>
    </Link>
    <Link href='/blog'>
      <a style={linkStyle}>Blog3</a>
    </Link>
  </div>
);

export default Header;

