import { Link } from 'react-router-dom';

interface NavbarProps {
  links: { name: string; path: string }[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="text-white hover:text-gray-200">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}