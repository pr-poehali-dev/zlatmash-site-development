import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Cog" size={32} className="text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">ЗЛАТМАШ</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#hero"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Главная
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            О компании
          </a>
          <a
            href="#products"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Продукция
          </a>
        </nav>

        <Button className="bg-blue-600 hover:bg-blue-700">
          Связаться с нами
        </Button>
      </div>
    </header>
  );
};

export default Header;
