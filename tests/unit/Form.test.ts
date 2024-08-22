import { describe, it, beforeEach, expect, vi } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import Form from "../../components/Form.vue";

// Define types for the component's data properties
interface PropertyOption {
  id: number;
  name: string;
}

interface Property {
  id: number;
  name: string;
  options: PropertyOption[];
  selectedOption: string | null;
  otherValue?: string;
  showOtherInput?: boolean;
  childProperties?: Property[];
}

// Mock `useRuntimeConfig` function
vi.mock('#app', () => ({
  useRuntimeConfig: () => ({
    public: {
      privateKey: 'mocked-private-key', // Provide a mock value for your tests
    }
  })
}));

describe("Form.vue", () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(Form, {
      global: {
        mocks: {
          $fetch: vi.fn(), // Mock the fetch function used in component
        },
      },
    });
  });

  it("fetches subcategories when a main category is selected", async () => {
    const fetchSubcategoriesMock = vi.spyOn(wrapper.vm, "fetchSubcategories");

    // Simulate selecting a main category
    wrapper.vm.selectedMainCategory = 1;
    await wrapper.vm.fetchSubcategories();
    await wrapper.vm.$nextTick();

    expect(fetchSubcategoriesMock).toHaveBeenCalled();
  });

  it("fetches and displays properties when a subcategory is selected", async () => {
    const fetchPropertiesMock = vi.spyOn(wrapper.vm, "fetchProperties");

    // Simulate selecting a subcategory
    wrapper.vm.selectedSubCategory = 1;
    await wrapper.vm.fetchProperties();
    await wrapper.vm.$nextTick();

    expect(fetchPropertiesMock).toHaveBeenCalled();
  });

  it('shows the custom input field when "other" option is selected', async () => {
    const testProperty: Property = {
      id: 1,
      name: "Color",
      options: [
        { id: 1, name: "Red" },
        { id: -1, name: "Other" },
      ],
      selectedOption: null,
      showOtherInput: false,
      childProperties: [],
    };

    // Set properties data
    wrapper.vm.properties = [testProperty];
    await wrapper.vm.$nextTick();

    // Simulate selecting the "Other" option
    wrapper.vm.properties[0].selectedOption = "-1";
    wrapper.vm.handlePropertyChange(wrapper.vm.properties[0], 0);

    await wrapper.vm.$nextTick();

    // Ensure the "Other" input field is shown
    expect(wrapper.vm.properties[0].showOtherInput).toBe(true);
  });

  it("handles form submission and displays submitted data", async () => {
    const testProperty: Property = {
      id: 1,
      name: "Color",
      options: [
        { id: 1, name: "Red" },
        { id: -1, name: "Other" },
      ],
      selectedOption: "-1",
      otherValue: "Custom Color",
      showOtherInput: true,
      childProperties: [],
    };

    wrapper.vm.selectedMainCategory = 1;
    wrapper.vm.selectedSubCategory = 1;
    wrapper.vm.properties = [testProperty];
    await wrapper.vm.handleSubmit(); // Await the method call

    await wrapper.vm.$nextTick();

    // Ensure the form submission displays the submitted data
    expect(wrapper.vm.submittedData).toEqual([
      {
        key: "Main Category",
        value: "", // Adjust based on actual main category value
      },
      {
        key: "Subcategory",
        value: "", // Adjust based on actual subcategory value
      },
      {
        key: "Color",
        value: "Custom Color",
      },
    ]);
  });
});
