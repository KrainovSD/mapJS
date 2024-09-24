import { Select as AntdSelect, theme } from "antd";
import type { SelectProps as AntdSelectProps } from "antd";
import type { DefaultOptionType, SelectValue } from "antd/es/select";
import { type ReactElement, useCallback, useMemo } from "react";
import { Flex } from "../flex";
import { LoadingOutlinedIcon } from "../icons";
import { Spin } from "../spin";
import { selectLoadingStyle } from "./styles";

export interface SelectProps extends AntdSelectProps {
  customOption?: JSX.Element;
  withEmptyOption?: boolean;
}

const EMPTY_OPTION = {
  label: "—",
  value: "EMPTY_VALUE",
};

export function Select(props: SelectProps): JSX.Element {
  const { withEmptyOption, value, loading, customOption, options, onChange, ...otherProps } = props;
  const { token } = theme.useToken();

  const dropdownContentRender = useCallback(
    (menu: ReactElement) => (
      <>
        {loading ? (
          <Flex align="center" justify="center" className={selectLoadingStyle(token)}>
            <Spin indicator={<LoadingOutlinedIcon spin />} />
          </Flex>
        ) : (
          <>
            {menu}
            {customOption || null}
          </>
        )}
      </>
    ),
    [loading, token, customOption],
  );

  const selectOptions = useMemo(
    () => (withEmptyOption ? [...(options || []), EMPTY_OPTION] : options),
    [withEmptyOption, options],
  );

  const handleChange = (value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => {
    onChange?.(value === EMPTY_OPTION.value ? undefined : value, option);
  };

  return (
    <AntdSelect
      {...otherProps}
      onChange={handleChange}
      value={value === undefined && withEmptyOption ? "" : value}
      options={selectOptions}
      dropdownRender={dropdownContentRender}
    />
  );
}
