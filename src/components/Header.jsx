function Header({ activeSection, onNavigate, headerRef, menuRef }) {
  const menuItems = [
    { id: 'bio', label: 'Bio' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <header ref={headerRef} className="px-8 lg:px-20 py-8">
      <nav aria-label="Main navigation" className="flex flex-col lg:flex-row justify-center lg:justify-between items-center p-4 h-24">
        <h2 className="inline text-2xl lg:text-3xl lumanosimo-regular">
          &lt;Portfolio <span className="inline text-royal-palm-500 font-bold">/</span>&gt;
        </h2>
        <ul
          ref={menuRef}
          id="menu"
          role="navigation"
          className="flex mt-6 text-sm gap-px lg:w-auto lg:text-base lg:mt-0 justify-end lg:gap-3 items-center"
        >
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`cursor-pointer py-3 px-4 lg:hover:bg-royal-palm-500 lg:hover:text-cream-cheese-100 lg:px-6 rounded-full mx-4 ${
                activeSection === item.id ? 'active' : ''
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

