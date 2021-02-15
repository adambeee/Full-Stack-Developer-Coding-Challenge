class Alert
  
  # Mongo Specific Attributes
  include Mongoid::Document
  include Mongoid::Timestamps

  # Custom Attributes
  field :errorId, type: String
  field :errorSeverity, type: String
  field :errorCategory, type: String
  field :errorMessage, type: String
  field :longMessage, type: String
  field :errorTime, type: Integer
  field :selected, type: Boolean
  field :new, type: Boolean
  field :expanded, type: Boolean

end
