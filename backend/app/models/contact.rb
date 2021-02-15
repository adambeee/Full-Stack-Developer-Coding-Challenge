class Contact
    
  # Mongo Specific Attributes
  include Mongoid::Document
  include Mongoid::Timestamps

  # Custom Attributes
  field :_id, type: String
  field :contactId, type: String
  field :contactStatus, type: String
  field :contactName, type: Integer
  field :contactGround, type: String
  field :contactSatellite, type: String
  field :contactEquipment, type: String
  field :contactState, type: String
  field :contactStep, type: String
  field :contactDetail, type: String
  field :contactBeginTimestamp, type: Integer
  field :contactEndTimestamp, type: Integer
  field :contactLatitude, type: Float
  field :contactLongitude, type: Float
  field :contactAzimuth, type: Float
  field :contactElevation, type: Float
  field :contactResolution, type: String
  field :contactResolutionStatus, type: String

end
