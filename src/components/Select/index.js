import ReactSelect from "react-select";
import { array, number, object, oneOfType, string } from "prop-types";
import useTheme from "hooks/theme";
import { SelectWrapper } from "./Select.style";

export default function Select({ options, value, onChange }) {
  const { theme } = useTheme();
  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

  const styles = {
    control: (base, state) => ({
      ...base,
      height: "44px",
      borderRadius: 8,
      border: `1px solid ${theme.grey2} !important`,
      cursor: "pointer",
      backgroundColor: theme.grey5,
      color: theme.dark1,
      fontSize: "12px",
      fontWeight: 500,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: theme.white,
      zIndex: 20,
      cursor: "pointer",
      border: "1px solid #E1E1E1",
      top: "40px",
      borderRadius: 8,
    }),
    option: (base, state) => ({
      ...base,
      fontSize: "14px",
      backgroundColor: (state.isFocused || state.isSelected) && "#F5F6FA",
      cursor: "pointer",
      color: theme.dark1,
    }),
  };

  return (
    <SelectWrapper>
      <ReactSelect
        value={value}
        onChange={handleChange}
        options={options}
        styles={styles}
      />
      {/* <select>
        <option>Popular</option>
        <option>Others</option>
      </select> */}
    </SelectWrapper>
  );
}

Select.propTypes = {
  options: array,
  value: oneOfType([number, string, object]),
};
