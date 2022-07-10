const
  IMAGE1 = 'avatar1.jpg',
  IMAGE2 = 'avatar2.jpg',
  NOT_AN_IMAGE = 'avatar.json'

describe('When loading the page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('should renders the dropzone', () => {
    const dropzone = cy.get('[data-testid="dropzone"]');
    dropzone.should("exist");
  })

  it('should have expected text messages', () => {
    const dropzoneMessage = cy.get('[data-testid="default-message"]');
    dropzoneMessage.should("include.text", "Organization Logo");
    dropzoneMessage.should("include.text", "Drop the image here or click to browse.");
  })
})

describe('When trying to upload a image file, should upload successfully', () => {

  beforeEach(() => {
    cy.visit('/')

    const fileUploadInput = cy.get('[data-testid="file-upload"]');
    fileUploadInput.should("exist")
    fileUploadInput.attachFile(IMAGE1);
  })

  it('should be visible', () => {
    const editor = cy.get('[data-testid="avatar-editor"]');
    editor.should('be.visible')
  })

  it('should have zoom input visible and active', () => {
    const zoomInput = cy.get('[data-testid="input-zoom"]')
    zoomInput.should('be.visible');
    zoomInput.should('be.enabled');
  })

  it('should have rotation input visible and active', () => {
    const rotationInput = cy.get('[data-testid="input-rotation"]')
    rotationInput.should('be.visible');
    rotationInput.should('be.enabled');
  })
})

describe('When trying to upload a file that is not an image', () => {
  beforeEach(() => {
    cy.visit('/')

    const fileUploadInput = cy.get('[data-testid="file-upload"]');
    fileUploadInput.should("exist")
    fileUploadInput.attachFile(NOT_AN_IMAGE);
  })

  it('should have a failed upload message', () => {
    const failedMessage = cy.get('[data-testid="failed-message"]');
    failedMessage.should('be.visible');
  })

  it('should have a try again button', () => {
    const tryAgainButton = cy.get('[data-testid="try-again"]');
    tryAgainButton.should('be.visible');
  })

  it('should return to dropzone by clicking on try again', () => {
    const tryAgainButton = cy.get('[data-testid="try-again"]');
    tryAgainButton.should('exist');
    tryAgainButton.click();

    const dropzone = cy.get('[data-testid="dropzone"]');
    dropzone.should("exist");
  })

  it('should have a close button', () => {
    const closeButton = cy.get('[data-testid="close-btn"]');
    closeButton.should('be.visible');
  })

  it('should return return to dropzone by clicking on try again', () => {
    const closeButton = cy.get('[data-testid="close-btn"]');
    closeButton.should('be.visible');
    closeButton.click();

    const dropzone = cy.get('[data-testid="dropzone"]');
    dropzone.should("exist");
  })
})

describe('When trying to upload a multiple files', () => {
  beforeEach(() => {
    cy.visit('/')

    const fileUploadInput = cy.get('[data-testid="file-upload"]');
    fileUploadInput.should("exist")
    fileUploadInput.attachFile([IMAGE1, IMAGE2]);
  })

  it('should have a failed upload message', () => {
    const failedMessage = cy.get('[data-testid="failed-message"]');
    failedMessage.should('be.visible');
  })

  it('should have a try again button', () => {
    const tryAgainButton = cy.get('[data-testid="try-again"]');
    tryAgainButton.should('be.visible');
  })

  it('should return to dropzone by clicking on try again', () => {
    const tryAgainButton = cy.get('[data-testid="try-again"]');
    tryAgainButton.should('exist');
    tryAgainButton.click();

    const dropzone = cy.get('[data-testid="dropzone"]');
    dropzone.should("exist");
  })

  it('should have a close button', () => {
    const closeButton = cy.get('[data-testid="close-btn"]');
    closeButton.should('be.visible');
  })

  it('should return return to dropzone by clicking on try again', () => {
    const closeButton = cy.get('[data-testid="close-btn"]');
    closeButton.should('be.visible');
    closeButton.click();

    const dropzone = cy.get('[data-testid="dropzone"]');
    dropzone.should("exist");
  })
})