class ShopifyRequirementBuilder {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 14;
        this.formData = {};
        this.steps = this.initializeSteps();

        this.initializeEventListeners();
        this.loadStep(this.currentStep);
        this.updateProgress();
        this.createStepIndicators();
        this.updateSummary();
    }

    initializeSteps() {
        return [
            {
                title: "Business & Brand Basics",
                icon: "fas fa-building",
                description: "Let's start with the foundation of your brand",
                questions: [
                    {
                        id: "brandName",
                        type: "text",
                        label: "1.1 Brand Name (as it should appear on the website):",
                        options: [
                            { value: "Brand Name", label: "Brand Name" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Enter brand name",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "brandPositioning",
                        type: "radio",
                        label: "1.2 Brand Positioning (choose the closest match):",
                        options: [
                            { value: "Premium gaming brand", label: "Premium gaming brand (high-end products, elite feel)" },
                            { value: "Value-focused", label: "Value-focused (best specs for the price)" },
                            { value: "Mass-market", label: "Mass-market gaming store" },
                            { value: "Niche/enthusiast", label: "Niche / enthusiast-focused (custom builds, rare parts)" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Enter Your response",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "targetMarket",
                        type: "radio",
                        label: "1.3 Target Market Location:",
                        options: [
                            { value: "UAE only", label: "UAE only" },
                            { value: "GCC countries", label: "GCC countries" },
                            { value: "Middle East", label: "Middle East" },
                            { value: "Global", label: "Global (international customers)" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Enter brand name",
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                title: "Target Audience",
                icon: "fas fa-users",
                description: "Who are your primary customers?",
                questions: [
                    {
                        id: "primaryCustomers",
                        type: "checkbox",
                        label: "2.1 Primary Customers:",
                        options: [
                            { value: "Casual gamers", label: "Casual gamers" },
                            { value: "Hardcore gamers", label: "Hardcore / competitive gamers" },
                            { value: "PC builders", label: "PC builders" },
                            { value: "Streamers", label: "Streamers / content creators" },
                            { value: "Parents", label: "Parents buying for kids" },
                            { value: "All above", label: "All of the above" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Enter brand name",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "ageGroup",
                        type: "radio",
                        label: "2.2 Age Group Focus:",
                        options: [
                            { value: "Under 18", label: "Under 18" },
                            { value: "18-25", label: "18–25" },
                            { value: "26-35", label: "26–35" },
                            { value: "36+", label: "36+" },
                            { value: "Mixed", label: "Mixed audience" }
                        ]
                    }
                ]
            },
            {
                title: "Product Categories",
                icon: "fas fa-boxes",
                description: "What products will you sell?",
                questions: [
                    {
                        id: "productsToSell",
                        type: "checkbox",
                        label: "3.1 Products to Sell:",
                        options: [
                            { value: "Pre-built PCs", label: "Pre-built Gaming PCs" },
                            { value: "Custom builds", label: "Custom PC Builds" },
                            { value: "Components", label: "PC Components (CPU, GPU, RAM, etc.)" },
                            { value: "Accessories", label: "Gaming Accessories (mouse, keyboard, headset)" },
                            { value: "Consoles", label: "Consoles (PlayStation, Xbox, etc.)" },
                            { value: "Games", label: "Console Games" },
                            { value: "Furniture", label: "Gaming Chairs / Desks" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "productVolume",
                        type: "radio",
                        label: "3.2 Product Volume at Launch:",
                        options: [
                            { value: "Less than 50", label: "Up to 50 products" },
                        ]
                    }
                ]
            },
            {
                title: "Design & Visual Direction",
                icon: "fas fa-boxes",
                description: "What design do you have in your mind?",
                questions: [
                    {
                        id: "Overall Website Look",
                        type: "radio",
                        label: "4.1 Overall Website Look:",
                        options: [
                            { value: "Dark gaming theme", label: "Dark gaming theme" },
                            { value: "Light & clean", label: "Light & clean" },
                            { value: "Cyber / neon style", label: "Cyber / neon style" },
                            { value: "Minimal & premium", label: "Minimal & premium" },
                            { value: "Similar to competitor references", label: "Similar to competitor references" ,hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "competitor references",
                                required: true},
                        ]
                    },
                    {
                        id: "4.2 Preferred Colors:",
                        type: "checkbox",
                        label: "4.2 Preferred Colors:",
                        options: [
                            { value: "Black / Dark Gray", label: "Black / Dark Gray" },
                            { value: "Red", label: "Red" },
                            { value: "Blue", label: "Blue" },
                            { value: "Purple", label: "Purple" },
                            { value: "Green", label: "Green" },
                            { value: "Custom brand colors", label: "Custom brand colors" ,hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Colors, Please provide HEX CODES",
                                required: true}
                        ]
                    },
                    {
                        id: "Website Inspiration (optional)",
                        type: "checkbox",
                        label: "4.3 Website Inspiration:",
                        options: [
                            {
                                value: "Website Links",
                                label: "Website Links" ,
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Website Links saparated by commas",
                                required: true
                            }
                        ]
                    },
                ]
            },
            {
                title: "Homepage Structure ",
                icon: "fas fa-boxes",
                description: "(Select what you want to see)",
                questions: [
                    {
                        id: "Homepage Sections",
                        type: "checkbox",
                        label: "5.1 Homepage Sections:",
                        options: [
                            { value: "Hero banner (main promotional section)", label: "Hero banner (main promotional section)" },
                            { value: "Featured products", label: "Featured products" },
                            { value: "Categories grid", label: "Categories grid" },
                            { value: "Best sellers", label: "Best sellers" },
                            { value: "Deals / offers section", label: "Deals / offers section" },
                            { value: "New arrivals", label: "New arrivals" },
                            { value: "Brand logos (partners)", label: "Brand logos (partners)" },
                            { value: "Customer reviews", label: "Customer reviews" },
                            { value: "Newsletter signup", label: "Newsletter signup" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                ]
            },
            {
                title: "Product Page Features",
                icon: "fas fa-boxes",
                description: "(Select what you want to see on product page)",
                questions: [
                    {
                        id: "Product Display Options",
                        type: "checkbox",
                        label: "6.1 Product Display Options:",
                        options: [
                            { value: "Multiple product images", label: "Multiple product images" },
                            { value: "Zoom on images", label: "Zoom on images" },
                            { value: "Product videos", label: "Product videos" },
                            { value: "Technical specifications table", label: "Technical specifications table" },
                            { value: "Compatibility information", label: "Compatibility information" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "custom PC",
                        type: "checkbox",
                        label: "6.2 Custom PC / Complex Products:",
                        options: [
                            { value: "Simple product only", label: "Simple product only" },
                            { value: "Variants (RAM size, storage, color)", label: "Variants (RAM size, storage, color)" },
                            { value: "Step-by-step PC builder (future scope)", label: "Step-by-step PC builder (future scope)" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                ]
            },
            {
                title: "Payments & Checkout",
                icon: "fas fa-boxes",
                description: "",
                questions: [
                    {
                        id: "Payment Methods:",
                        type: "checkbox",
                        label: "7.1 Payment Methods:",
                        options: [
                            { value: "Credit / Debit Cards", label: "Credit / Debit Cards" },
                            { value: "Cash on Delivery (COD)", label: "Cash on Delivery (COD)" },
                            { value: "Apple Pay / Google Pay", label: "Apple Pay / Google Pay" },
                            { value: "Buy Now Pay Later (Tabby / Tamara)", label: "Buy Now Pay Later (Tabby / Tamara)" },
                            { value: "Bank Transfer", label: "Bank Transfer" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "Currency Display",
                        type: "checkbox",
                        label: "7.2 Currency Display:",
                        options: [
                            { value: "AED only", label: "AED only" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                ]
            },
            {
                title: "Shipping & Delivery",
                icon: "fas fa-boxes",
                description: "",
                questions: [
                    {
                        id: "Shipping Regions:",
                        type: "checkbox",
                        label: "8.1 Shipping Regions:",
                        options: [
                            { value: "UAE only", label: "UAE only" },
                            { value: "GCC", label: "GCC" },
                            { value: "International", label: "International" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "Shipping Pricing Model:",
                        type: "checkbox",
                        label: "8.2 Shipping Pricing Model:",
                        options: [
                            { value: "Free shipping", label: "Free shipping" },
                            { value: "Flat rate", label: "Flat rate" },
                            { value: "Based on weight", label: "Based on weight" },
                            { value: "Based on location", label: "Based on location" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "Delivery Speed Display:",
                        type: "checkbox",
                        label: "8.3 Delivery Speed Display:",
                        options: [
                            { value: "Standard delivery", label: "Standard delivery" },
                            { value: "Express delivery", label: "Express delivery" },
                            { value: "Same-day delivery (if applicable)", label: "Same-day delivery (if applicable)" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                ]
            },
            {
                title: "Taxes & Legal Pages",
                icon: "fas fa-boxes",
                description: "",
                questions: [
                    {
                        id: "VAT / Tax Setup:",
                        type: "checkbox",
                        label: "9.1 VAT / Tax Setup:",
                        options: [
                            { value: "UAE VAT (5%)", label: "UAE VAT (5%)" },
                            { value: "Other regional taxes", label: "Other regional taxes" },
                            { value: "Tax included in prices", label: "Tax included in prices" },
                            { value: "Tax added at checkout", label: "Tax added at checkout" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "9.2 Required Pages:",
                        type: "checkbox",
                        label: "9.2 Required Pages:",
                        options: [
                            { value: "Privacy Policy", label: "Privacy Policy" },
                            { value: "Terms & Conditions", label: "Terms & Conditions" },
                            { value: "Refund & Return Policy", label: "Refund & Return Policy" },
                            { value: "Shipping Policy", label: "Shipping Policy" },
                            { value: "About Us", label: "About Us" },
                            { value: "Contact Us", label: "Contact Us" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },

                ]
            },
            {
                title: "User Accounts & Features",
                icon: "fas fa-boxes",
                description: "",
                questions: [
                    {
                        id: "Customer Accounts:",
                        type: "checkbox",
                        label: "10.1 Customer Accounts:",
                        options: [
                            { value: "Guest checkout only", label: "Guest checkout only" },
                            { value: "Optional customer accounts", label: "Optional customer accounts" },
                            { value: "Mandatory login for purchase", label: "Mandatory login for purchase" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "10.2 Additional Features:",
                        type: "checkbox",
                        label: "10.2 Additional Features:",
                        options: [
                            { value: "Wishlist", label: "Wishlist" },
                            { value: "Compare products", label: "Compare products" },
                            { value: "Reviews & ratings", label: "Refund & Return Policy" },
                            { value: "WhatsApp button", label: "WhatsApp button" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },

                ]
            },
            {
                title: "SEO & Marketing Basics",
                icon: "fas fa-boxes",
                description: "",
                questions: [
                    {
                        id: "SEO Setup:",
                        type: "checkbox",
                        label: "11.1 SEO Setup:",
                        options: [
                            { value: "Basic on-page SEO", label: "Basic on-page SEO" },
                            { value: "SEO-friendly URLs", label: "SEO-friendly URLs" },
                            { value: "Meta titles & descriptions", label: "Meta titles & descriptions" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "Marketing Integrations",
                        type: "checkbox",
                        label: "Marketing Integrations",
                        options: [
                            { value: "Google Analytics", label: "Google Analytics" },
                            { value: "Google Search Console", label: "Google Search Console" },
                            { value: "Facebook / Meta Pixel", label: "Facebook / Meta Pixel" },
                            { value: "TikTok Pixel", label: "TikTok Pixel" },
                            { value: "Email marketing tool", label: "Email marketing tool" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },

                ]
            },
            {
                title: "Content Responsibility",
                icon: "fas fa-boxes",
                description: "",
                questions: [
                    {
                        id: "Who Will Provide Content",
                        type: "checkbox",
                        label: "12.1 Who Will Provide Content?",
                        options: [
                            { value: "Client provides all product data", label: "Client provides all product data" },
                            { value: "Agency uploads provided data", label: "Agency uploads provided data" },
                            { value: "Agency helps structure content", label: "Agency helps structure content" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "Product Images",
                        type: "checkbox",
                        label: "12.2 Product Images:",
                        options: [
                            { value: "Provided by brand", label: "Provided by brand" },
                            { value: "Manufacturer images", label: "Manufacturer images" },
                            { value: "Agency optimization only", label: "Agency optimization only" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },

                ]
            },
            {
                title: "Timeline & Launch",
                icon: "fas fa-boxes",
                description: "",
                questions: [
                    {
                        id: "Who Will Provide Content",
                        type: "checkbox",
                        label: "13.1 Preferred Timeline:",
                        options: [
                            { value: "3–5 weeks", label: "3–5 weeks" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                    {
                        id: "Launch Priority:",
                        type: "checkbox",
                        label: "13.2 Launch Priority:",
                        options: [
                            { value: "Speed (launch fast)", label: "Speed (launch fast)" },
                            { value: "Quality & polish", label: "Quality & polish" },
                            { value: "Phased launch (MVP first)", label: "Phased launch (MVP first)" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },

                ]
            },
            {
                title: "Post-Launch Support",
                icon: "fas fa-boxes",
                description: "",
                questions: [
                    {
                        id: "After Launch Support",
                        type: "checkbox",
                        label: "14.1 After Launch Support:",
                        options: [
                            { value: "14 days", label: "14 days" },
                            {
                                value: "Other",
                                label: "Other (please specify)",
                                hasInput: true,
                                inputType: "text", // Type of input field
                                placeholder: "Custom Request",
                                required: true
                            }
                        ]
                    },
                ]
            },
        ];
    }

    initializeEventListeners() {
        document.getElementById('nextBtn').addEventListener('click', () => this.nextStep());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevStep());
        document.getElementById('submitBtn').addEventListener('click', () => this.submitForm());
        document.getElementById('previewBtn').addEventListener('click', () => this.showPreview());
        document.getElementById('closeModal').addEventListener('click', () => this.closePreview());
        document.getElementById('closePreviewBtn').addEventListener('click', () => this.closePreview());
        document.getElementById('downloadPdfBtn').addEventListener('click', () => this.generatePDF());
    }

    loadStep(stepNumber) {
        const step = this.steps[stepNumber - 1];
        if (!step) return;

        const stepContainer = document.getElementById('stepContainer');
        stepContainer.innerHTML = this.generateStepHTML(step);

        this.loadSavedAnswers(stepNumber);
        this.setupInputListeners(stepNumber);
        this.updateNavigationButtons();
        this.updateProgress();
        this.updateSummary();
    }

    generateStepHTML(step) {
        let html = `
            <div class="section-header">
                <h2 class="section-title">
                    <i class="${step.icon}"></i>
                    ${step.title}
                </h2>
                <p class="section-description">${step.description}</p>
            </div>
        `;

        step.questions.forEach((question, qIndex) => {
            html += this.generateQuestionHTML(question, qIndex);
        });

        return html;
    }

    generateQuestionHTML(question, index) {
  let html = `
    <div class="question-group" style="animation-delay: ${index * 0.1 + 0.1}s">
      <label class="question-label">${question.label}</label>
  `;

  // Handle different question types
  switch(question.type) {
    case 'text':
    case 'email':
    case 'number':
      html += this.generateTextInputHTML(question);
      break;

    case 'textarea':
      html += this.generateTextareaHTML(question);
      break;

    case 'radio':
      html += this.generateRadioHTML(question);
      break;

    case 'checkbox':
      html += this.generateCheckboxHTML(question);
      break;

    default:
      html += this.generateRadioHTML(question); // Default fallback
  }

  html += '</div>';
  return html;
}

    getIconForOption(value) {
        const icons = {
            'Pre-built PCs': 'desktop',
            'Custom builds': 'tools',
            'Components': 'microchip',
            'Accessories': 'mouse',
            'Consoles': 'gamepad',
            'Games': 'compact-disc',
            'Furniture': 'chair'
        };
        return icons[value] || 'box';
    }

    setupInputListeners(stepNumber) {
        // Radio button listeners
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const value = e.target.value;
                const questionId = e.target.name;
                this.formData[questionId] = value;

                // Show/hide optional input
                if (e.target.dataset.hasInput === 'true') {
                    const inputField = document.querySelector(`[data-for="${e.target.id}"]`);
                    if (inputField) {
                        inputField.style.display = e.target.checked ? 'block' : 'none';
                        if (e.target.checked) {
                            inputField.focus();
                        }
                    }
                }

                this.updateSummary();
                this.saveToLocalStorage();
            });
        });

        // Checkbox card listeners
        document.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const checkbox = card.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
                card.classList.toggle('selected');

                const questionId = checkbox.name;
                this.updateCheckboxValues(questionId);
                this.updateSummary();
                this.saveToLocalStorage();
            });
        });

        // Optional input listeners
        document.querySelectorAll('.optional-input').forEach(input => {
            input.addEventListener('input', (e) => {
                const radioId = e.target.dataset.for;
                const radio = document.getElementById(radioId);
                if (radio && radio.checked) {
                    this.formData[radio.name] = `Other: ${e.target.value}`;
                    this.updateSummary();
                    this.saveToLocalStorage();
                }
            });
        });
    }

    updateCheckboxValues(questionId) {
  const checkboxes = document.querySelectorAll(`input[name="${questionId}"]:checked`);
  const values = [];

  checkboxes.forEach(checkbox => {
    // Check if this checkbox has a custom input value
    if (this.formData[`${questionId}_custom`] &&
        this.formData[`${questionId}_custom`][checkbox.value]) {
      values.push(`${checkbox.value}: ${this.formData[`${questionId}_custom`][checkbox.value]}`);
    } else {
      values.push(checkbox.value);
    }
  });

  this.formData[questionId] = values;
}

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.loadStep(this.currentStep);
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.loadStep(this.currentStep);
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        prevBtn.style.display = this.currentStep > 1 ? 'flex' : 'none';

        if (this.currentStep === this.totalSteps) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'flex';
        } else {
            nextBtn.style.display = 'flex';
            submitBtn.style.display = 'none';
        }
    }

    updateProgress() {
        const progress = (this.currentStep / this.totalSteps) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `Step ${this.currentStep} of ${this.totalSteps}`;
    }

    createStepIndicators() {

        // const container = document.getElementById('stepIndicators');
        // container.innerHTML = '';

        // for (let i = 1; i <= this.totalSteps; i++) {
        //     const indicator = document.createElement('div');
        //     indicator.className = 'step-indicator';
        //     if (i === this.currentStep) indicator.classList.add('active');
        //     indicator.addEventListener('click', () => {
        //         this.currentStep = i;
        //         this.loadStep(i);
        //     });
        //     container.appendChild(indicator);
        // }
         const container = document.getElementById('stepIndicators');
    container.innerHTML = '';

    for (let i = 1; i <= this.totalSteps; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'step-indicator';

        // Add active class only to current step
        if (i === this.currentStep) {
            indicator.classList.add('active');
        }

        // Make indicator clickable to navigate
        indicator.addEventListener('click', () => {
            this.currentStep = i;
            this.loadStep(i);
            this.updateStepIndicators();
        });

        container.appendChild(indicator);
    }
    }
updateStepIndicators() {
    const indicators = document.querySelectorAll('.step-indicator');

    indicators.forEach((indicator, index) => {
        const stepNumber = index + 1;

        // Remove active class from all
        indicator.classList.remove('active');

        // Add active class only to current step
        if (stepNumber === this.currentStep) {
            indicator.classList.add('active');
        }
    });
}
    loadSavedAnswers(stepNumber) {
  const step = this.steps[stepNumber - 1];
  if (!step) return;

  step.questions.forEach(question => {
    const savedValue = this.formData[question.id];
    if (!savedValue) return;

    if (question.type === 'text' || question.type === 'textarea' ||
        question.type === 'email' || question.type === 'number') {
      const input = document.getElementById(question.id);
      if (input) {
        input.value = savedValue;
      }
    } else if (question.type === 'radio') {
      const radio = document.querySelector(`input[name="${question.id}"][value="${savedValue}"]`);
      if (radio) {
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));
      }
    } else if (question.type === 'checkbox') {
      const values = Array.isArray(savedValue) ? savedValue : [savedValue];
      values.forEach(value => {
        // Handle custom values (with ": " separator)
        if (value.includes(": ")) {
          const [optionValue, customText] = value.split(": ");
          const checkbox = document.querySelector(`input[name="${question.id}"][value="${optionValue}"]`);
          if (checkbox) {
            checkbox.checked = true;
            const card = checkbox.closest('.option-card');
            if (card) card.classList.add('selected');

            // Find and populate input field
            const inputField = document.querySelector(`.optional-checkbox-input[data-parent="${checkbox.id}"]`);
            if (inputField) {
              inputField.value = customText;
              const inputContainer = document.querySelector(`[data-for="${checkbox.id}"]`);
              if (inputContainer) inputContainer.style.display = 'block';
            }
          }
        } else {
          const checkbox = document.querySelector(`input[name="${question.id}"][value="${value}"]`);
          if (checkbox) {
            checkbox.checked = true;
            const card = checkbox.closest('.option-card');
            if (card) card.classList.add('selected');
          }
        }
      });
    }
  });
}

    updateSummary() {
  const summaryContent = document.getElementById('summaryContent');
  let html = '';

  Object.entries(this.formData).forEach(([key, value]) => {
    // Skip custom data keys
    if (key.endsWith('_custom')) return;

    if (value && (Array.isArray(value) ? value.length > 0 : value.toString().trim() !== '')) {
      const label = this.getQuestionLabel(key);
      let displayValue;

      if (Array.isArray(value)) {
        displayValue = value.map(v => {
          // Check if this is a custom value from checkbox
          const customData = this.formData[`${key}_custom`];
          if (customData && customData[v]) {
            return `${v}: ${customData[v]}`;
          }
          return v;
        }).join(', ');
      } else {
        displayValue = value;
      }

      html += `
        <div class="summary-item">
          <h4>${label}</h4>
          <p>${displayValue}</p>
        </div>
      `;
    }
  });

  if (!html) {
    html = '<p class="empty-summary">No selections made yet. Complete the form to see your summary.</p>';
  }

  summaryContent.innerHTML = html;
}

    getQuestionLabel(questionId) {
        for (const step of this.steps) {
            for (const question of step.questions) {
                if (question.id === questionId) {
                    return question.label.split(':')[0];
                }
            }
        }
        return questionId;
    }

    saveToLocalStorage() {
        localStorage.setItem('shopifyRequirements', JSON.stringify(this.formData));
    }

    loadFromLocalStorage() {
        const saved = localStorage.getItem('shopifyRequirements');
        if (saved) {
            this.formData = JSON.parse(saved);
        }
    }

    showPreview() {
        const modal = document.getElementById('previewModal');
        const previewContent = document.getElementById('previewContent');

        let html = `
            <div class="preview-header">
                <h3>Client Brand – Website Requirement Builder</h3>
                <p class="preview-date">Generated on ${new Date().toLocaleDateString()}</p>
            </div>
        `;

        this.steps.forEach((step, index) => {
            const stepData = this.formData;
            let stepHtml = '';

            step.questions.forEach(question => {
                const value = stepData[question.id];
                if (value && (Array.isArray(value) ? value.length > 0 : true)) {
                    stepHtml += `
                        <div class="preview-question">
                            <strong>${question.label}</strong>
                            <p>${Array.isArray(value) ? value.join(', ') : value}</p>
                        </div>
                    `;
                }
            });

            if (stepHtml) {
                html += `
                    <div class="preview-section">
                        <h4>${index + 1}. ${step.title}</h4>
                        ${stepHtml}
                    </div>
                `;
            }
        });

        previewContent.innerHTML = html;
        modal.style.display = 'flex';
    }

    closePreview() {
        document.getElementById('previewModal').style.display = 'none';
    }

    submitForm() {
        // Save data to server/database here
        console.log('Form submitted:', this.formData);

        // Show success toast
        this.showToast('Form submitted successfully!');

        // Show preview
        this.showPreview();
    }

    showToast(message) {
        const toast = document.getElementById('successToast');
        toast.querySelector('span').textContent = message;
        toast.style.display = 'flex';

        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }

    generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Add header
        doc.setFillColor(67, 97, 238);
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.text('Client Brand', 105, 20, { align: 'center' });
        doc.setFontSize(12);
        doc.text('Shopify Store Requirements', 105, 30, { align: 'center' });

        // Add content
        let yPosition = 50;
        doc.setTextColor(0, 0, 0);

        this.steps.forEach((step, index) => {
            // Add section header
            doc.setFontSize(14);
            doc.setFont(undefined, 'bold');
            doc.text(`${index + 1}. ${step.title}`, 20, yPosition);
            yPosition += 10;

            // Add questions and answers
            doc.setFontSize(11);
            doc.setFont(undefined, 'normal');

            step.questions.forEach(question => {
                const value = this.formData[question.id];
                if (value && (Array.isArray(value) ? value.length > 0 : true)) {
                    const answer = Array.isArray(value) ? value.join(', ') : value;

                    // Check if we need a new page
                    if (yPosition > 280) {
                        doc.addPage();
                        yPosition = 20;
                    }

                    doc.setFont(undefined, 'bold');
                    doc.text(question.label, 20, yPosition);
                    yPosition += 6;

                    doc.setFont(undefined, 'normal');
                    const lines = doc.splitTextToSize(answer, 170);
                    lines.forEach(line => {
                        if (yPosition > 280) {
                            doc.addPage();
                            yPosition = 20;
                        }
                        doc.text(line, 25, yPosition);
                        yPosition += 6;
                    });

                    yPosition += 4;
                }
            });

            yPosition += 5;
        });

        // Add footer
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(100, 100, 100);
            doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: 'center' });
            doc.text(`Generated on ${new Date().toLocaleDateString()}`, 105, 295, { align: 'center' });
        }

        // Save the PDF
        doc.save(`Shopify_Requirements_${Date.now()}.pdf`);
        this.showToast('PDF downloaded successfully!');
    }

    handleRadioChange(e) {
  const value = e.target.value;
  const questionId = e.target.name;
  this.formData[questionId] = value;

  // Show/hide optional input
  if (e.target.dataset.hasInput === 'true') {
    const inputField = document.querySelector(`[data-for="${e.target.id}"]`);
    if (inputField) {
      inputField.style.display = e.target.checked ? 'block' : 'none';
      if (e.target.checked && this.formData[`${questionId}_other`]) {
        inputField.value = this.formData[`${questionId}_other`];
      }
    }
  }

  this.updateSummary();
  this.saveToLocalStorage();
}

handleCheckboxClick(e, card) {
  const checkbox = card.querySelector('input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;
  card.classList.toggle('selected');

  const questionId = checkbox.name;
  const hasInput = card.dataset.hasInput === 'true';
  const optionId = card.dataset.optionId;

  // Toggle input field visibility
  if (hasInput) {
    const inputContainer = document.querySelector(`[data-for="${optionId}"]`);
    if (inputContainer) {
      inputContainer.style.display = checkbox.checked ? 'block' : 'none';
    }
  }

  this.updateCheckboxValues(questionId);
  this.updateSummary();
  this.saveToLocalStorage();
}

handleOptionalInputChange(e) {
  const radioId = e.target.dataset.for;
  const radio = document.getElementById(radioId);
  if (radio && radio.checked) {
    const questionId = radio.name;
    this.formData[questionId] = e.target.value;
    this.updateSummary();
    this.saveToLocalStorage();
  }
}
setupInputListeners(stepNumber) {
  // Radio button listeners (existing)
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      this.handleRadioChange(e);
    });
  });

  // Checkbox card listeners (updated)
  document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', (e) => {
      this.handleCheckboxClick(e, card);
    });
  });

  // Text input listeners
  document.querySelectorAll('.input-field:not(.optional-input):not(.optional-checkbox-input)').forEach(input => {
    input.addEventListener('input', (e) => {
      this.formData[e.target.name] = e.target.value;
      this.updateSummary();
      this.saveToLocalStorage();
    });
  });

  // Textarea listeners
  document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', (e) => {
      this.formData[e.target.name] = e.target.value;
      this.updateSummary();
      this.saveToLocalStorage();
    });
  });

  // Optional input listeners for radio buttons
  document.querySelectorAll('.optional-input').forEach(input => {
    input.addEventListener('input', (e) => {
      this.handleOptionalInputChange(e);
    });
  });

  // Optional input listeners for checkboxes
  document.querySelectorAll('.optional-checkbox-input').forEach(input => {
    input.addEventListener('input', (e) => {
      this.handleOptionalCheckboxInputChange(e);
    });
  });
}
handleOptionalCheckboxInputChange(e) {
  const parentId = e.target.dataset.parent;
  const checkbox = document.getElementById(parentId);
  if (checkbox && checkbox.checked) {
    const questionId = checkbox.name;
    const optionValue = checkbox.value;

    // Store custom input value for this specific checkbox
    if (!this.formData[`${questionId}_custom`]) {
      this.formData[`${questionId}_custom`] = {};
    }

    if (e.target.value.trim()) {
      this.formData[`${questionId}_custom`][optionValue] = e.target.value;
    } else {
      delete this.formData[`${questionId}_custom`][optionValue];
    }

    this.updateSummary();
    this.saveToLocalStorage();
  }
}

generateTextInputHTML(question) {
  return `
    <input type="${question.type}"
           class="input-field"
           id="${question.id}"
           name="${question.id}"
           placeholder="${question.placeholder || ''}"
           ${question.required ? 'required' : ''}
           value="${this.formData[question.id] || ''}">
  `;
}

generateTextareaHTML(question) {
  return `
    <textarea class="input-field textarea-field"
              id="${question.id}"
              name="${question.id}"
              placeholder="${question.placeholder || ''}"
              rows="${question.rows || 4}"
              ${question.required ? 'required' : ''}>${this.formData[question.id] || ''}</textarea>
  `;
}

generateRadioHTML(question) {
  let html = '<div class="radio-group">';

  question.options.forEach((option, i) => {
    const optionId = `${question.id}_${i}`;

    html += `
      <label class="radio-label" for="${optionId}">
        <span class="custom-radio"></span>
        <input type="radio"
               id="${optionId}"
               name="${question.id}"
               value="${option.value}"
               ${option.hasInput ? 'data-has-input="true"' : ''}>
        ${option.label}
      </label>
    `;

    // Add input field if option has input
    if (option.hasInput) {
      html += `
        <input type="${option.inputType || 'text'}"
               class="input-field optional-input"
               data-for="${optionId}"
               placeholder="${option.placeholder || 'Please specify...'}"
               ${option.required ? 'required' : ''}
               style="margin-top: 8px; display: none;">
      `;
    }
  });

  html += '</div>';
  return html;
}

generateCheckboxHTML(question) {
  let html = '<div class="options-grid">';

  question.options.forEach((option, i) => {
    const optionId = `${question.id}_${i}`;
    const hasInput = option.hasInput || false;

    html += `
      <div class="option-card"
           data-value="${option.value}"
           data-has-input="${hasInput}"
           data-option-id="${optionId}">
        <div class="option-check">
          <i class="fas fa-check"></i>
        </div>
        <div class="option-icon">
          <i class="fas fa-${this.getIconForOption(option.value)}"></i>
        </div>
        <div class="option-text">${option.label}</div>
        <input type="checkbox"
               id="${optionId}"
               name="${question.id}"
               value="${option.value}"
               style="display: none;">
      </div>
    `;

    // Add input field below the checkbox if needed
    if (hasInput) {
      html += `
        <div class="option-input-container" data-for="${optionId}" style="grid-column: 1 / -1; display: none;">
          <input type="${option.inputType || 'text'}"
                 class="input-field optional-checkbox-input"
                 data-parent="${optionId}"
                 placeholder="${option.placeholder || 'Please specify...'}"
                 ${option.required ? 'required' : ''}>
        </div>
      `;
    }
  });

  html += '</div>';
  return html;
}
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const app = new ShopifyRequirementBuilder();
    window.shopifyApp = app; // Make accessible for debugging
});
