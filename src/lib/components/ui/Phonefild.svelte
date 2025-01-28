<script>
    // @ts-ignore
    let { name = "floating_phone",change,same,valid,options,selectedCountry,searchPlaceholder = 'Search',detailedValue = null,value = $bindable(), closeOnClick = true,clickOutside = true, disabled = false,lebel = {"he":"","en":""}, lang = "he" , placeholder = {"he":"","en":""} } = $props(); 
    // @ts-ignore
    let diff = Math.random()
	import { clickOutsideAction } from 'svelte-tel-input/utils';
	// @ts-ignore
	import { TelInput, isSelected, normalizedCountries } from 'svelte-tel-input';
	import 'svelte-tel-input/styles/flags.css';
	let searchText = $state('');
	let isOpen = $state(false);
	let selectedCountryDialCode = $state();
	$effect(()=>{
		selectedCountryDialCode =
			normalizedCountries.find((el) => el.iso2 === selectedCountry)?.dialCode || null;
	}) 

	// @ts-ignore
	const toggleDropDown = (e) => {
		e?.preventDefault();
		if (disabled) return;
		isOpen = !isOpen;
	};

	// @ts-ignore
	const closeDropdown = (e) => {
		if (isOpen) {
			e?.preventDefault();
			isOpen = false;
			searchText = '';
		}
	};

	const selectClick = () => {
		if (closeOnClick) closeDropdown();
	};

	const closeOnClickOutside = () => {
		if (clickOutside) {
			closeDropdown();
		}
	};

	// @ts-ignore
	const sortCountries = (countries, text) => {
		const normalizedText = text.trim().toLowerCase();
		if (!normalizedText) {
			// @ts-ignore
			return countries.sort((a, b) => a.label.localeCompare(b.label));
		}
		// @ts-ignore
		return countries.sort((a, b) => {
			const aNameLower = a.name.toLowerCase();
			const bNameLower = b.name.toLowerCase();
			const aStartsWith = aNameLower.startsWith(normalizedText);
			const bStartsWith = bNameLower.startsWith(normalizedText);
			if (aStartsWith && !bStartsWith) return -1;
			if (!aStartsWith && bStartsWith) return 1;
			const aIndex = aNameLower.indexOf(normalizedText);
			const bIndex = bNameLower.indexOf(normalizedText);
			if (aIndex === -1 && bIndex === -1) return a.id.localeCompare(b.id);
			if (aIndex === -1) return 1;
			if (bIndex === -1) return -1;
			const aWeight = aIndex + (aStartsWith ? 0 : 1);
			const bWeight = bIndex + (bStartsWith ? 0 : 1);
			return aWeight - bWeight;
		});
	};

	// @ts-ignore
	const handleSelect = (val, e) => {
		if (disabled) return;
		e?.preventDefault();
		if (
			selectedCountry === undefined ||
			selectedCountry === null ||
			(typeof selectedCountry === typeof val && selectedCountry !== val)
		) {
			selectedCountry = val;
			onChange(val);
			selectClick();
		} else {
			same({ option: val });
			selectClick();
		}
	};

	// @ts-ignore

	// @ts-ignore
	const onChange = (selectedCountry) => {
	change({ option: selectedCountry });
	};
</script>

<div dir="ltr" class="phone-field {valid ? '' : 'phone-field-invalid'}">
	<div class="dropdown-container" use:clickOutsideAction={closeOnClickOutside}>
		<button
			id="states-button"
			data-dropdown-toggle="dropdown-states"
			class="dropdown-button"
			type="button"
			role="combobox"
			aria-controls="dropdown-countries"
			aria-expanded="false"
			aria-haspopup="false"
			onclick={toggleDropDown}
		>
			{#if selectedCountry && selectedCountry !== null}
				<div class="selected-country">
					<span class="flag flag-{selectedCountry.toLowerCase()} flag-icon" />
					{#if options?.format === 'national'}
						<span class="dial-code">+{selectedCountryDialCode}</span>
					{/if}
				</div>
			{:else}
				Please select
			{/if}
			<svg
				aria-hidden="true"
				class="dropdown-arrow"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		{#if isOpen}
			<div
				id="dropdown-countries"
				class="dropdown-list"
				data-popper-reference-hidden=""
				data-popper-escaped=""
				data-popper-placement="bottom"
				aria-orientation="vertical"
				aria-labelledby="country-button"
				tabindex="-1"
			>
				<div
					class="country-list"
					aria-labelledby="countries-button"
					role="listbox"
				>
					<input
						aria-autocomplete="list"
						type="text"
						class="search-input"
						bind:value={searchText}
						placeholder={searchPlaceholder}
					/>
					{#each sortCountries(normalizedCountries, searchText) as country (country.id)}
						{@const isActive = isSelected(country.iso2, selectedCountry)}
						<div id="country-{country.iso2}" role="option" aria-selected={isActive}>
							<button
								value={country.iso2}
								type="button"
								class="country-option"
								onclick={(e) => {
									handleSelect(country.iso2, e);
								}}
							>
								<div class="country-info">
									<span
										class="flag flag-{country.iso2.toLowerCase()} flag-icon"
									/>
									<span class="country-name">{country.name}</span>
									<span class="dial-code">+{country.dialCode}</span>
								</div>
							</button>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<TelInput
		bind:country={selectedCountry}
		bind:detailedValue
		bind:value
		bind:valid
		{options}
		required
		class="tel-input"
	/>
</div>
<style>
	.phone-field {
		display: flex;
		position: relative;
	}

	.phone-field-invalid {
		ring-color: #f43f5e;
		dark-ring-color: #f43f5e;
		ring-width: 1px;
		focus-within-ring-offset: 1px;
		focus-within-ring-offset-color: #f9a8d480;
		focus-within-ring-width: 1px;
	}

	.dropdown-container {
		display: flex;
	}

	.dropdown-button {
		position: relative;
		flex-shrink: 0;
		overflow: hidden;
		z-index: 10;
		white-space: nowrap;
		display: inline-flex;
		align-items: center;
		padding-top: 0.625rem;
		padding-bottom: 0.625rem;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		text-align: center;
		color: #6b7280;
		background-color: #f9fafb;
		border-width: 1px;
		border-color: #d1d5db;
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
		cursor: pointer;
		transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.dropdown-button:hover {
		background-color: #e5e7eb;
	}

	.dropdown-button:focus {
		outline: none;
	}

	.dark .dropdown-button {
		background-color: #374151;
		color: #fff;
		border-color: #4b5563;
	}

	.dark .dropdown-button:hover {
		background-color: #4b5563;
	}

	.selected-country {
		display: inline-flex;
		align-items: center;
		text-align: left;
	}

	.flag-icon {
		flex-shrink: 0;
		margin-right: 0.75rem;
	}

	.dial-code {
		color: #6b7280;
	}

	.dark .dial-code {
		color: #d1d5db;
	}

	.dropdown-arrow {
		margin-left: 0.25rem;
		width: 1rem;
		height: 1rem;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.rotate-180 {
		transform: rotate(180deg);
	}

	.dropdown-list {
		position: absolute;
		z-index: 10;
		/* max-width: fit-content; */ /* Removed max-width */
        width: 100%; /* Added width: 100% to make it responsive */
		background-color: #fff;
		border-radius: 0.5rem;
		border-width: 1px;
		border-color: #e5e7eb;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
		overflow: hidden;
		transform: translateY(11px);
	}

	.dark .dropdown-list {
		background-color: #374151;
		border-color: #4b5563;
		box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}

	.country-list {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #374151;
		max-height: 12rem;
		overflow-y: auto;
	}

	.dark .country-list {
		color: #d1d5db;
	}

	.search-input {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		color: #111827;
		border: none;
		width: 100%;
		position: sticky;
		top: 0;
		outline: none;
	}

	.search-input:focus {
		outline: none;
	}

	.country-option {
		display: inline-flex;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		width: 100%;
		font-size: 0.875rem;
		line-height: 1.25rem;
		transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		cursor: pointer;
		overflow: hidden;
		text-align: left;
	}

	.country-option:hover {
		background-color: #f9fafb;
	}

	.dark .country-option:hover {
		background-color: #4b5563;
	}

	.country-option:focus {
		outline: none;
	}

	.country-info {
		display: inline-flex;
		align-items: center;
		text-align: left;
	}

	.country-name {
		margin-right: 0.5rem;
	}

	.tel-input {
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		display: block;
		width: 100%;
		padding: 0.625rem;
		outline: 2px solid transparent;
		outline-offset: 2px;
		border-width: 1px;
		border-color: #d1d5db;
		border-left-color: #f9fafb;
		background-color: #f9fafb;
		color: #111827;
	}

	.dark .tel-input {
		border-left-color: #374151;
		background-color: #374151;
		color: #fff;
		placeholder-color: #9ca3af;
	}

	.tel-input:focus {
		outline: none;
	}
</style>
