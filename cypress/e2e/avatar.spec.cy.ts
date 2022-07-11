const fs = require('fs')

import { IMAGE1, IMAGE2, NOT_AN_IMAGE } from '../utils/mockImages'

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
    const rotationInput = cy.get('[data-testid="input-rotation"]');
    rotationInput.should('be.visible');
    rotationInput.should('be.enabled');
  })

  it("should have a close button", () => {
    const closeButton = cy.get('[data-testid="close-btn"]')
    closeButton.should('be.visible');
  })

  it('should return return to dropzone by clicking on close button', () => {
    const closeButton = cy.get('[data-testid="close-btn"]');
    closeButton.should('be.visible');
    closeButton.click();

    const dropzone = cy.get('[data-testid="dropzone"]');
    dropzone.should("exist");
  })
})

describe('When trying to upload a file that is not an image, should give an erro', () => {
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

  it('should return return to dropzone by clicking on close button', () => {
    const closeButton = cy.get('[data-testid="close-btn"]');
    closeButton.should('be.visible');
    closeButton.click();

    const dropzone = cy.get('[data-testid="dropzone"]');
    dropzone.should("exist");
  })
})

describe('When trying to upload a multiple files, should give an error', () => {
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

describe('Testing drag and drop functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be in the document', () => {
    const dragAndDropElement = cy.get('[data-testid="dragndrop"]')
    dragAndDropElement.should('exist')
  })

  it('should upload an image by dragging and dropping the file', () => {
    const dragAndDropElement = cy.get('[data-testid="dragndrop"]')
    dragAndDropElement.attachFile(IMAGE1, { subjectType: 'drag-n-drop' })

    const editor = cy.get('[data-testid="avatar-editor"]');
    editor.should('be.visible')
  })
})

describe("When upload is successful", () => {

  beforeEach(() => {
    cy.visit('/')

    const fileUploadInput = cy.get('[data-testid="file-upload"]');
    fileUploadInput.should("exist")
    fileUploadInput.attachFile(IMAGE2);
  })

  it("should allow zoom from 1 to 3 times", () => {
    const zoomInput = cy.get('[data-testid="input-zoom"]');
    zoomInput.should('exist')
    zoomInput.invoke('val', 1.5).should('have.value', 1.5);
    zoomInput.invoke('val', 0).should('have.value', 1);
    zoomInput.invoke('val', 4).should('have.value', 3);
  })

  it("should allow rotation from 0 to 360 degrees", () => {
    const rotationInput = cy.get('[data-testid="input-rotation"]');
    rotationInput.should('exist')
    rotationInput.invoke('val', 30).should('have.value', 30);
    rotationInput.invoke('val', -45).should('have.value', 0);
    rotationInput.invoke('val', 450).should('have.value', 360);
  })

  it('should crop the image by clicking on save button', () => {
    const saveButton = cy.get('[data-testid="save-btn"]');
    saveButton.should('exist');
    saveButton.click();

    const avatarImage = cy.get('[data-testid="avatar"]');
    avatarImage.should('be.visible')
  })
})

describe("Testing Delete image button", () => {
  beforeEach(() => {
    cy.visit('/')

    const fileUploadInput = cy.get('[data-testid="file-upload"]');
    fileUploadInput.should("exist")
    fileUploadInput.attachFile(IMAGE2);

    const saveButton = cy.get('[data-testid="save-btn"]');
    saveButton.click();
  })

  it('should be in the document', () => {
    const deleteImageButton = cy.get('[data-testid="button-remove"]');
    deleteImageButton.should('exist')
    deleteImageButton.should('be.visible')
  })

  it('should remove the avatar image', () => {
    const deleteImageButton = cy.get('[data-testid="button-remove"]');
    deleteImageButton.should('exist')
    deleteImageButton.click();

    const avatarImage = cy.get('[data-testid="avatar"]');
    avatarImage.should('not.exist')

    cy.get('[data-testid="button-remove"]').should('not.exist');
  })
})

describe("Testing download button", () => {
  beforeEach(() => {
    cy.visit('/')

    const fileUploadInput = cy.get('[data-testid="file-upload"]');
    fileUploadInput.should("exist")
    fileUploadInput.attachFile(IMAGE1);

    const saveButton = cy.get('[data-testid="save-btn"]');
    saveButton.click();
  })

  it('should be in the document', () => {
    const donwloadImageButton = cy.get('[data-testid="button-download"]');
    donwloadImageButton.should('exist');
    donwloadImageButton.should('be.visible');
  })

  it('should donwload the image', () => {
    const donwloadImageButton = cy.get('[data-testid="button-download"]');
    donwloadImageButton.click();

    cy.readFile('cypress/downloads/avatar.png')
  })
})

