import { useTranslation } from 'react-i18next';
import { locales } from "@/i18n/i18n"
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import viLang from "@/assets/svg/language/vi.svg"
import enLang from "@/assets/svg/language/en.svg"
const HeaderLayout = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const navigation = [
    { name: t('header.home'), href: '/', current: true },
    { name: t('header.about'), href: '/about', current: false },
    { name: t('header.project'), href: '/project', current: false },
  ]
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = isDark ? 'dark' : 'light';
    setTheme(defaultTheme);
    document.documentElement.classList.toggle('dark', defaultTheme === 'dark');
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  const currentLanguage = locales[i18n.language as keyof typeof locales];
  const changeLanguage = (lng: "en" | "vi") => {
    i18n.changeLanguage(lng);
  }
  const location = useLocation();

  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/" className="text-[var(--text-content)] text-[20px] font-medium">{t('header.author')}</Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative mr-2 sm:mr-3 ">
              <div onClick={toggleTheme}>{theme === 'dark' ? <BsSunFill color='yellow' className='text-xl cursor-pointer' /> : <BsFillMoonStarsFill color='black' className='text-l cursor-pointer' />}</div>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md py-2 sm:px-3 sm:py-2 text-sm font-semibold text-gray-900 shadow-xs ring-inset cursor-pointer">
                  <img
                    style={{ height: 20, width: 20 }}
                    src={(currentLanguage == 'English' ? enLang : viLang)} alt='language'
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-30 sm:w-40 origin-top-right rounded-md bg-[var(--background-language)] text-[var(--foreground)] shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <button onClick={() => changeLanguage("vi")} className="flex gap-2 px-4 py-2 text-sm  data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden w-full cursor-pointer"> <img
                      style={{ height: 20, width: 20 }}
                      src={viLang} alt='vietnamese'
                    /> <span>Tiếng Việt</span> </button>
                  </MenuItem>
                  <MenuItem>
                    <button onClick={() => changeLanguage("en")} className="flex gap-2 px-4 py-2 text-sm  data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden w-full cursor-pointer"><img
                      style={{ height: 20, width: 20 }}
                      src={enLang} alt='english'
                    /> <span>English</span> </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className={classNames(
                  isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}

        </div>
      </DisclosurePanel>
    </Disclosure >
  )
}

export default HeaderLayout
