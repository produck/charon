interface BaseAccessor {}

interface AccessorConstructor<
	Descriptor extends BaseDescriptor = {},
	ChildrenAccessorConstructorMap extends AccessorConstructorMap = {},
> {
	new <
		Context = any
	>(
		context: Context
	): MixinedAccessor<Descriptor, ChildrenAccessorConstructorMap>;

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
	Descriptor extends BaseDescriptor = BaseDescriptor,
	ChildrenAccessorConstructorMap extends AccessorConstructorMap = AccessorConstructorMap
> = BaseAccessor & {
	[SelfProperty in keyof Descriptor]:
		Descriptor[SelfProperty] extends PropertyDescriptorObject<infer R>
			? R : Descriptor[SelfProperty]
} & {
	[ChildProperty in keyof ChildrenAccessorConstructorMap]:
		InstanceType<ChildrenAccessorConstructorMap[ChildProperty]>;
}

export function define<
	CustomDescriptor extends BaseDescriptor = BaseDescriptor,
	ChildrenAccessorConstructorMap extends AccessorConstructorMap = AccessorConstructorMap
>(
	descriptor?: CustomDescriptor,
	children?: ChildrenAccessorConstructorMap
): AccessorConstructor<CustomDescriptor, ChildrenAccessorConstructorMap>;
