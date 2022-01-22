interface BaseAccessor {}

interface AccessorConstructor<
	Descriptor extends BaseDescriptor = {},
	ChildrenAccessorConstructorMap extends AccessorConstructorMap = {},
> {
	new <
		Context = any
	>(
		raw: object,
		context: Context
	): MixinedAccessor<Context, Descriptor, ChildrenAccessorConstructorMap>;

	Raw(): object;

	merge(
		accessor: MixinedAccessor<any, Descriptor, ChildrenAccessorConstructorMap>,
		options: object
	): void;
}

interface PropertyDescriptorObject<
	Value = any,
> {
	value: Value;
	set?(newValue?: Value, oldValue?: Value, context?: any): void;
	validate?(value?: Value, context?: any): boolean;
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
	Context = any,
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
