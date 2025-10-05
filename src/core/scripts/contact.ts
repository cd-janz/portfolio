import type IContactForm from "../types/IContactForm.ts";

const form = document.getElementById("contactForm");
if(!form) throw new Error("Could not find element");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement | null;
  if(!target) return;
  const formData = new FormData(target)
  const data: IContactForm = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  } as IContactForm;
  console.log(data);
})