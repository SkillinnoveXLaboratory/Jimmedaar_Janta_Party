import { useState } from 'react';

export default function JoinForm({ onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    voterId: '',
    state: '',
    district: '',
    block: '',
    panchayet: '',
    booth: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [memberId, setMemberId] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      // Validate step 1
      if (!formData.name || !formData.phone || !formData.email || !formData.voterId) {
        setError('Please fill in all fields');
        return;
      }
      // Basic Indian Voter ID (EPIC) check: 3 letters followed by 7 digits, e.g. ABC1234567
      if (!/^[A-Za-z]{3}[0-9]{7}$/.test(formData.voterId.trim())) {
        setError('Voter ID should be 3 letters followed by 7 digits (e.g., ABC1234567)');
        return;
      }
      setError('');
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate step 2
    if (!formData.state || !formData.district || !formData.block || !formData.panchayet || !formData.booth) {
      setError('Please fill in all fields');
      return;
    }
    
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setMemberId(data.memberId);
      } else {
        setError(data.error || 'Failed to register. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setStep(1);
    setError('');
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-ink/80 flex items-center justify-center z-50 p-4">
        <div className="bg-paper border-2 border-ink rounded-sm shadow-[8px_8px_0_0_var(--gold)] max-w-md w-full p-8 text-center">
          <div className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle text-gold-ink mx-auto">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
          </div>
          <h3 className="font-display text-2xl text-ink mb-4">Welcome to Jimmedaar!</h3>
          <p className="text-ink/70 mb-6">Your membership has been registered successfully.</p>
          
          <div className="bg-paper-soft border-2 border-gold rounded-sm p-6 mb-6">
            <p className="text-sm text-ink/60 mb-2 condensed uppercase tracking-wider">Your Member ID</p>
            <p className="font-display text-3xl text-gold-ink tracking-wider">{memberId}</p>
          </div>
          
          <p className="text-sm text-ink/60 mb-6">Please screenshot your Member ID for future reference.</p>
          
          <button
            onClick={onClose}
            className="condensed text-sm font-semibold tracking-wider bg-ink text-paper px-8 py-3 rounded-sm hover:bg-gold hover:text-ink transition w-full"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-ink/80 flex items-center justify-center z-50 p-4">
      <div className="bg-paper border-2 border-ink rounded-sm shadow-[8px_8px_0_0_var(--gold)] max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-paper border-b border-ink/10 px-6 py-4 flex items-center justify-between">
          <h3 className="font-display text-xl text-ink">Join Jimmedaar Janata Party</h3>
          <button
            onClick={onClose}
            className="text-ink/60 hover:text-ink transition"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <div className="p-6">
          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-8">
            <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-gold-ink' : 'bg-ink/20'}`}></div>
            <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-gold-ink' : 'bg-ink/20'}`}></div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={step === 1 ? handleNext : handleSubmit}>
            {step === 1 ? (
              <>
                <h4 className="font-display text-lg text-ink mb-6">Personal Information</h4>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper-soft focus:outline-none focus:border-gold transition"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper-soft focus:outline-none focus:border-gold transition"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper-soft focus:outline-none focus:border-gold transition"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="voterId" className="block text-sm font-medium text-ink mb-2">
                      Voter ID (EPIC) *
                    </label>
                    <input
                      type="text"
                      id="voterId"
                      name="voterId"
                      value={formData.voterId}
                      onChange={handleChange}
                      maxLength={10}
                      className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper-soft focus:outline-none focus:border-gold transition uppercase"
                      placeholder="e.g., ABC1234567"
                      required
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="condensed text-sm font-semibold tracking-wider bg-ink text-paper px-8 py-3 rounded-sm hover:bg-gold hover:text-ink transition"
                  >
                    Next →
                  </button>
                </div>
              </>
            ) : (
              <>
                <h4 className="font-display text-lg text-ink mb-6">Location Information</h4>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-ink mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper-soft focus:outline-none focus:border-gold transition"
                      placeholder="Enter your state"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="district" className="block text-sm font-medium text-ink mb-2">
                      District *
                    </label>
                    <input
                      type="text"
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper-soft focus:outline-none focus:border-gold transition"
                      placeholder="Enter your district"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="block" className="block text-sm font-medium text-ink mb-2">
                      Block *
                    </label>
                    <input
                      type="text"
                      id="block"
                      name="block"
                      value={formData.block}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper-soft focus:outline-none focus:border-gold transition"
                      placeholder="Enter your block"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="panchayet" className="block text-sm font-medium text-ink mb-2">
                      Panchayet/Paurasobha *
                    </label>
                    <input
                      type="text"
                      id="panchayet"
                      name="panchayet"
                      value={formData.panchayet}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper-soft focus:outline-none focus:border-gold transition"
                      placeholder="Enter your panchayet/paurasobha"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="booth" className="block text-sm font-medium text-ink mb-2">
                      Booth *
                    </label>
                    <input
                      type="text"
                      id="booth"
                      name="booth"
                      value={formData.booth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper-soft focus:outline-none focus:border-gold transition"
                      placeholder="Enter your booth number"
                      required
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="condensed text-sm font-semibold tracking-wider border-2 border-ink text-ink px-8 py-3 rounded-sm hover:bg-ink/10 transition"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="condensed text-sm font-semibold tracking-wider bg-ink text-paper px-8 py-3 rounded-sm hover:bg-gold hover:text-ink transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
