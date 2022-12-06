import Section from "../../Page/Layout/Section";
function Contact1Compo({
  increaseStatefunc,
  ChangeLinkfunc,
  ChangeTitlefunc,
  id,
  titledes,
  linkdes,
}) {
  const ChangeLink = (e) => {
    ChangeLinkfunc(e.target.id, e.target.value);
  };
  const ChangeTitle = (e) => {
    ChangeTitlefunc(e.target.id, e.target.value);
  };
  return (
    <Section
      increaseStatefunc={increaseStatefunc}
      className="w-[740px] bg-c3 py-[20px] px-[40px] font-para border-c4 rounded-[40px] border-[2px] text-white"
    >
      <textarea
        rows="1"
        className="text-[18px] font-bold outline-0	w-[100%] bg-transparent "
        id={id}
        value={`${titledes}`}
        onChange={ChangeTitle}
      ></textarea>
      <textarea
        id={id}
        value={`${linkdes}`}
        multiple
        onChange={ChangeLink}
        className="mt-[10px] text-[14px] leading-[19px] text-[#0084FF] underline outline-0	w-[100%] bg-transparent"
      ></textarea>
    </Section>
  );
}

export default Contact1Compo;
