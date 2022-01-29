interface Accessor {}

interface PropertyDescriptorObject<Value = any> {
	value: Value;
	set?(newValue?: any, oldValue?: any): any;
	validate?: (value: Value) => any;
	[key: string]: any;
}

type ThisTypedPropertyDescriptorObject<Context = any> = PropertyDescriptorObject & ThisType<Context>;
type SimplePropertyDescriptor = number | boolean | string | symbol | null | Function;
type SimpleType<T> = T extends boolean ? boolean : T;

interface PropertyDescriptorMap<Context = any> {
	[propertyName: string]: ThisTypedPropertyDescriptorObject<Context> | SimplePropertyDescriptor;
}

type ThisTypedPropertyDescriptorMap<
	Context = any,
	CustomPropertyDescriptorMap extends PropertyDescriptorMap<Context> = {},
> = CustomPropertyDescriptorMap & ThisType<Context>;

interface AccessorConstructor<
	Context = any,
	CustomPropertyDescriptorMap extends PropertyDescriptorMap<Context> = {},
	ChildrenAccessorConstructorMap extends AccessorConstructorMap = {},
> {
	new (context: Context): MixinedAccessor<CustomPropertyDescriptorMap, ChildrenAccessorConstructorMap>;

	appendChild(name: string, ChildAccessor: AccessorConstructor): void;

	merge<
		CustomAccessor = MixinedAccessor<CustomPropertyDescriptorMap, ChildrenAccessorConstructorMap>
	>(
		accessor: CustomAccessor,
		options: CustomAccessor
	): void;
}

interface AccessorConstructorMap {
	[propertyName: string]: AccessorConstructor
}

type MixinedAccessor<
	CustomPropertyDescriptorMap extends PropertyDescriptorMap = {},
	ChildrenAccessorConstructorMap extends AccessorConstructorMap = {}
> = Accessor & {
	[SelfProperty in keyof CustomPropertyDescriptorMap]:
		CustomPropertyDescriptorMap[SelfProperty] extends PropertyDescriptorObject<infer R>
			? R : SimpleType<CustomPropertyDescriptorMap[SelfProperty]>;
} & {
	[ChildProperty in keyof ChildrenAccessorConstructorMap]:
		InstanceType<ChildrenAccessorConstructorMap[ChildProperty]>;
}

export interface OptionsConstructorProvider<
	Context = any
> {
	<
		CustomPropertyDescriptorMap extends PropertyDescriptorMap<Context> = {},
		ChildrenAccessorConstructorMap extends AccessorConstructorMap = {}
	>(
		descriptor?: ThisTypedPropertyDescriptorMap<Context, CustomPropertyDescriptorMap>,
		children?: ChildrenAccessorConstructorMap,
		eachSet?: (this: Context) => void
	): AccessorConstructor<Context, CustomPropertyDescriptorMap, ChildrenAccessorConstructorMap>;
}

export const define: OptionsConstructorProvider<any>