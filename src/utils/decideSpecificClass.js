export default function decideSpecificClass(right, index) {
  let specificClass = null;
  if (right && index === 0) {
    specificClass = "col-span-12 mb-6 md:col-span-8";
  } else if (right && !index === 0) {
    specificClass = "col-span-12 md:col-span-8";
  } else if (!right && index === 0) {
    specificClass = "col-span-12 grid grid-cols-12 gap-4";
  } else if (!right && index === 1) {
    specificClass = "col-span-12 grid grid-cols-12 gap-4 lg:col-span-8";
  } else {
    specificClass = "col-span-12 md:col-span-6 lg:col-span-4";
  }
  return specificClass;
}
