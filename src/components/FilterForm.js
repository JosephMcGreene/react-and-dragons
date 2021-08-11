import AlignmentSelect from "./filters/AlignmentSelect";
import ChallengeSelect from "./filters/ChallengeSelect";
import ImmuneSelect from "./filters/ImmuneSelect";
import LanguageSelect from "./filters/LanguageSelect";
import ResistanceSelect from "./filters/ResistanceSelect";
import SizeSelect from "./filters/SizeSelect";
import TypeSelect from "./filters/TypeSelect";
import VulnerSelect from "./filters/VulnerSelect";

function FilterForm() {
  return (
    <form>
      <AlignmentSelect />
      <ChallengeSelect />
      <LanguageSelect />
      <SizeSelect />
      <TypeSelect />
      <VulnerSelect />
      <ResistanceSelect />
      <ImmuneSelect />
    </form>
  );
}

export default FilterForm;
