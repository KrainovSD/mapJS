import type { FormInstance } from "antd";
import { Form, theme } from "antd";
import type { FC } from "react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../../button";
import { Flex } from "../../flex";
import { CloseOutlinedIcon } from "../../icons";
import { Input } from "../../input";
import { Popover } from "../../popover";
import { Text } from "../../typography";
import type { FilterFieldType } from "../types";
import { PopoverElementStyles } from "./styles";

interface IProps {
  field: FilterFieldType;
  newFilter: boolean;
  onRemove: () => void;
  form?: FormInstance;
}

export const PopoverField: FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);
  const fieldValue = Form.useWatch(props.field.name, props.form);
  const { token } = theme.useToken();

  useEffect(() => {
    setOpen(props.newFilter);
  }, [props.newFilter]);

  const displayValue = useMemo(() => {
    if (fieldValue) {
      if (props.field.labelInValue && props.field.renderDisplayValue) {
        return props.field.renderDisplayValue(fieldValue);
      }

      return props.field.renderDisplayValue
        ? props.field.renderDisplayValue(fieldValue)
        : `${fieldValue}`;
    }
  }, [fieldValue, props.field]);

  return (
    <Popover
      placement="bottomLeft"
      arrow={false}
      destroyTooltipOnHide={true}
      content={
        <Form.Item
          name={props.field.name}
          rules={props.field.rules}
          noStyle
          style={{ minWidth: 200 }}
        >
          {props.field.inputField}
        </Form.Item>
      }
      trigger="click"
      open={open}
      onOpenChange={setOpen}
    >
      <div className={PopoverElementStyles(token)} style={{ paddingRight: 5 }}>
        {/* Используется для инициализации формы */}
        <Form.Item name={props.field.name} style={{ display: "none" }}>
          {props.field.inputField || <Input placeholder={props.field.label} />}
        </Form.Item>
        <Flex align="center" wrap={false}>
          <Text type={fieldValue && "secondary"}>{props.field.label}</Text>
          <Text ellipsis={{ tooltip: displayValue }} style={{ maxWidth: 200, marginLeft: 5 }}>
            {displayValue}
          </Text>
          <Button
            style={{
              marginLeft: 8,
              padding: 8,
              width: 16,
              height: 16,
            }}
            onClick={(e) => {
              e.stopPropagation();
              props.onRemove();
            }}
            type="text"
            shape="round"
            icon={<CloseOutlinedIcon style={{ opacity: 0.5, fontSize: 12 }} />}
          />
        </Flex>
      </div>
    </Popover>
  );
};
