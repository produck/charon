interface BaseAccessor {}

export interface AccessorConstructor<
	Descriptor extends BaseDescriptor = {},
	ChildrenAccessorConstructorMap extends AccessorConstructorMap = {},
> {
	new <
		Context = any
	>(
		context: Context
	): MixinedAccessor<Descriptor, ChildrenAccessorConstructorMap>;

	appendChild(name: string, ChildAccessor: AccessorConstructor): void;

	merge(
		accessor: MixinedAccessor<Descriptor, ChildrenAccessorConstructorMap>,
		options: object
	): void;
}

interface PropertyDescriptorObject<
	Value = any
> {
	value: Value;
	set?(newValue?: any, oldValue?: any): any;
	validate?(value?: any): any;
	[key: string]: any;
}

type SimpleProperty = number | boolean | string | symbol;
type PropertyDescriptor = PropertyDescriptorObject | SimpleProperty;

interface BaseDescriptor {
	[key: string]: PropertyDescriptor;
}

interface AccessorConstructorMap {
	[key: string]: AccessorConstructor;
}

type MixinedAccessor<
	Descriptor extends BaseDescriptor = {},
	ChildrenAccessorConstructorMap extends AccessorConstructorMap = {}
> = BaseAccessor & {
	[SelfProperty in keyof Descriptor]:
		Descriptor[SelfProperty] extends PropertyDescriptorObject<infer R>
			? R : Descriptor[SelfProperty]
} & {
	[ChildProperty in keyof ChildrenAccessorConstructorMap]:
		InstanceType<ChildrenAccessorConstructorMap[ChildProperty]>;
}

export interface OptionsConstructorProvider<
	Context = any
> {
	<
		CustomDescriptor extends BaseDescriptor = {},
		ChildrenAccessorConstructorMap extends AccessorConstructorMap = {}
	> (
		descriptor?: CustomDescriptor,
		children?: ChildrenAccessorConstructorMap
	): AccessorConstructor<CustomDescriptor, ChildrenAccessorConstructorMap>;
}

export const define: OptionsConstructorProvider;