import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">FES</h3>
            <p className="text-primary-foreground/80 text-sm">
              Fashion E-commerce Store
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@fes-store.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Indore , Madhya Pradesh India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-foreground/60 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground/60 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground/60 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} FES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;