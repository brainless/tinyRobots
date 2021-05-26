export enum CountEnum {
  SingleItem,
  ArrayOfItems,
  StreamOfItems,
}

export enum ItemTypeEnum {
  String,
  Array,
  Object,
}

export interface RobotInputOutputInterface {
  count: CountEnum;
  itemType: ItemTypeEnum;
}

export interface RobotInterface {
  name: string;
  description?: string;
  input?: RobotInputOutputInterface;
  output?: RobotInputOutputInterface;
  hashTags: Array<string>;
}
