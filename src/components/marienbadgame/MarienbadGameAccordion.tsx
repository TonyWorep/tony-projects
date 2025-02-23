import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";

export default function MarienbadGameAccordion() {
  return (
    <div className="flex flex-col mt-20 w-full">
      <Accordion
        type="single"
        collapsible
        className="w-72 sm:w-[600px] mx-auto"
      >
        <AccordionItem value="1">
          <AccordionTrigger>Why does the computer always win?</AccordionTrigger>
          <AccordionContent>
            <iframe
              className="w-full h-96"
              src="https://www.youtube.com/embed/SUh8C387BVU"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
