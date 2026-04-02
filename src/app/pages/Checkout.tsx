import { motion } from "motion/react";
import { Check, Lock, CreditCard, User, Mail, Phone, Building2, MapPin } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useSearchParams, useNavigate } from "react-router";

export function Checkout() {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Get program information from URL params
  const programName = searchParams.get('program') || 
    (language === 'fr' ? 'Programme sélectionné' : 'Selected Program');
  const programPrice = searchParams.get('price') || '$0.00';
  const memberType = searchParams.get('memberType') || 
    (language === 'fr' ? 'Membre' : 'Member');

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Institutional Information
    institution: '',
    department: '',
    position: '',
    
    // Billing Address
    address: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'Canada',
    
    // Payment Information
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    
    // Agreement
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would process the payment
    alert(language === 'fr' 
      ? 'Merci pour votre inscription! Vous recevrez un courriel de confirmation sous peu.'
      : 'Thank you for your registration! You will receive a confirmation email shortly.');
    navigate('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const provinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
    'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island',
    'Quebec', 'Saskatchewan', 'Yukon'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-20"
          >
            <h1 className="mb-4">
              {language === 'fr' ? 'Paiement sécurisé' : 'Secure Checkout'}
            </h1>
            <p className="text-xl text-white/90 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              {language === 'fr' 
                ? 'Vos informations sont protégées et sécurisées'
                : 'Your information is protected and secure'}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === 'fr' ? 'Informations personnelles' : 'Personal Information'}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Prénom' : 'First Name'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Nom de famille' : 'Last Name'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Courriel' : 'Email'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Téléphone' : 'Phone'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Institutional Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === 'fr' ? 'Informations institutionnelles' : 'Institutional Information'}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Établissement' : 'Institution'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Département' : 'Department'}
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Poste' : 'Position'}
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Billing Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === 'fr' ? 'Adresse de facturation' : 'Billing Address'}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Adresse' : 'Street Address'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Ville' : 'City'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Province' : 'Province'}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">
                        {language === 'fr' ? 'Sélectionner une province' : 'Select a province'}
                      </option>
                      {provinces.map(prov => (
                        <option key={prov} value={prov}>{prov}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Code postal' : 'Postal Code'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Pays' : 'Country'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                      readOnly
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === 'fr' ? 'Informations de paiement' : 'Payment Information'}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Numéro de carte' : 'Card Number'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      maxLength={19}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? 'Nom sur la carte' : 'Name on Card'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {language === 'fr' ? "Date d'expiration" : 'Expiry Date'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                      maxLength={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      CVV
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                      maxLength={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Terms and Submit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-3 mb-6">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 mt-0.5 text-primary focus:ring-primary"
                  />
                  <label className="text-sm text-gray-700">
                    {language === 'fr' 
                      ? "J'accepte les conditions générales et la politique de remboursement de l'ACEM"
                      : "I agree to CAME's terms and conditions and cancellation policy"}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.agreeToTerms}
                  className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  {language === 'fr' ? 'Compléter le paiement' : 'Complete Payment'}
                </button>
              </motion.div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg sticky top-24"
            >
              <h2 className="text-2xl font-bold mb-6">
                {language === 'fr' ? 'Résumé de la commande' : 'Order Summary'}
              </h2>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    {language === 'fr' ? 'Programme' : 'Program'}
                  </p>
                  <p className="font-semibold">{programName}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    {language === 'fr' ? 'Type de membre' : 'Member Type'}
                  </p>
                  <p className="font-semibold">{memberType}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">
                    {language === 'fr' ? 'Sous-total' : 'Subtotal'}
                  </span>
                  <span className="font-semibold">{programPrice}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>HST (13%)</span>
                  <span>{language === 'fr' ? 'Inclus' : 'Included'}</span>
                </div>
              </div>

              <div className="border-t-2 border-gray-300 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary">{programPrice}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <p className="font-semibold text-sm">
                  {language === 'fr' ? 'Votre inscription comprend :' : 'Your registration includes:'}
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>
                      {language === 'fr' 
                        ? 'Accès complet au programme'
                        : 'Full program access'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>
                      {language === 'fr' 
                        ? 'Tous les matériaux'
                        : 'All materials'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>
                      {language === 'fr' 
                        ? 'Certificat ACEM'
                        : 'CAME certificate'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>
                      {language === 'fr' 
                        ? 'Crédits de formation continue'
                        : 'Continuing education credits'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
