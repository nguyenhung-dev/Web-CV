import { useTranslation } from 'react-i18next';
import { locales } from "@/i18n/i18n"
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import viLang from "@/assets/svg/language/vi.svg"
import enLang from "@/assets/svg/language/en.svg"
import ToggleTheme from '@/components/toggle-theme';
import "./style.css";

const HeaderLayout = () => {
  const { t, i18n } = useTranslation();
  const navigation = [
    { name: t('header.home'), href: '/', current: true },
    { name: t('header.project'), href: '/project', current: false },
    { name: t('header.about'), href: '/about', current: false },
  ]
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }
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
              <Link to="/" className="logo text-[20px] font-medium"><pre>Portfolio</pre></Link>
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
                        isActive ? 'menu-active' : '',
                        isActive ? '' : 'menu-header',
                        'rounded-md px-3 py-2 text-sm font-medium text-[var(--text-header)]',
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ToggleTheme />
            <div className="hidden sm:block">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md py-2 sm:px-3 sm:py-2 text-sm  cursor-pointer">
                    <img
                      style={{ height: 23, width: 23 }}
                      src={(currentLanguage == 'English' ? enLang : viLang)} alt='language'
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-35 sm:w-40 origin-top-right rounded-md bg-[var(--background-language)] text-[var(--foreground)] shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <button onClick={() => changeLanguage("vi")} className="flex gap-2 px-4 py-2 text-sm  data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden w-full cursor-pointer">
                        <img style={{ height: 20, width: 20 }} src={viLang} alt='vietnamese' />
                        <span>Tiếng Việt</span>
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button onClick={() => changeLanguage("en")} className="flex gap-2 px-4 py-2 text-sm  data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden w-full cursor-pointer">
                        <img style={{ height: 20, width: 20 }} src={enLang} alt='english' />
                        <span>English</span>
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
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
                  isActive ? 'bg-emerald-600 text-white' : 'text-[var(--foreground)] hover:bg-emerald-500 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium ',
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
          <Menu as="div" className="relative block text-left">
            <div>
              <MenuButton className="inline-flex w-full gap-x-1.5 rounded-md py-3 sm:px-3 sm:py-2 text-sm cursor-pointer ml-2">
                <img
                  style={{ height: 23, width: 23 }}
                  src={(currentLanguage == 'English' ? enLang : viLang)} alt='language'
                />
                <span className='text-[var(--foreground)] font-[500]'>{currentLanguage == 'English' ? 'English' : 'Tiếng Việt'}</span>
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute left-[10px] z-10 w-35 origin-top-right rounded-md bg-[var(--background-language)] text-[var(--foreground)] shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <button onClick={() => changeLanguage("vi")} className="flex gap-2 px-4 py-2 text-sm  data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden w-full cursor-pointer">
                    <img style={{ height: 20, width: 20 }} src={viLang} alt='vietnamese' />
                    <span>Tiếng Việt</span>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button onClick={() => changeLanguage("en")} className="flex gap-2 px-4 py-2 text-sm  data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden w-full cursor-pointer">
                    <img style={{ height: 20, width: 20 }} src={enLang} alt='english' />
                    <span>English</span>
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default HeaderLayout
