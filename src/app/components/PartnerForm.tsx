import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast.success("Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      phoneNumber: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-border"
    >
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">
            First name
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Shams"
            required
            className="bg-white/50"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">
            Last name
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Hassan"
            required
            className="bg-white/50"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm text-muted-foreground mb-1 block">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="sameerrehami56@gmail.com"
          required
          className="bg-white/50"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm text-muted-foreground mb-1 block">
          Subject
        </label>
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Type subject here ..."
          required
          className="bg-white/50"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm text-muted-foreground mb-1 block">
          Phone Number
        </label>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-white/50 px-3 rounded-md border border-input">
            <span className="text-2xl">🇾🇪</span>
            <span className="text-sm">+967</span>
          </div>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="738884491"
            required
            className="flex-1 bg-white/50"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="text-sm text-muted-foreground mb-1 block">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here ..."
          required
          rows={4}
          className="bg-white/50 resize-none"
        />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
        Send Message
      </Button>
    </form>
  );
};

export default PartnerForm;
