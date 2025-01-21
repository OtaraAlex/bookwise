import Link from "next/link";
import { Button } from "@/components/ui/button";
import BookForm from "@/components/admin/forms/BookForm";

const CreateNewBook = () => {
  return (
    <>
      <Button className="back-btn" asChild>
        <Link href="/admin/books">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </>
  );
};

export default CreateNewBook;
